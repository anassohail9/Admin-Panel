import React, { Fragment, useState, useEffect } from 'react';
import '../cssStyle/CreateId.css';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import { AiFillCopy } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createdeviceId } from '../actions/createId'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const CreateId = ({ createdeviceId }) => { 
  const [devicetypes, setdevicetypes] = useState([])
  const [device, setdevice] = useState("")
  const [parametertypes, setparametertypes] = useState({
    parameters:[],
    device_name:""
  })
  const [parameter, setparameter] = useState("")
  const [parameters, setparameters]= useState([])
  // const [isLoading, setisLoading] = useState('');
  const [isError, setisError] = useState('');

  const handleDeviceChange = e => {
    setdevice({device: e.target.value});
  }
  const handleParameterChange = e => {
    setparameter({parameter: e.target.value});
  }

 useEffect(() => {
  // setisLoading({ isLoading: true })
   axios.get(`/getDeviceTypes`)
  .then(response => { setdevicetypes(response.data )})
  .catch(error => { setisError(error.data) } )

 },[])


 useEffect(() => {
  // setState({ isLoading: true })
   axios.get(`/parameters/${device.device}`)
  //  .then(response => console.log(device))
   .then(response => { setparametertypes(response.data )})
   .catch(error => { setisError(error.data) } )
   
 }, [device])

useEffect(() => {
  if(parametertypes != null && parametertypes !== undefined){
    setparameters(parametertypes.parameters)
   }
}, [parametertypes])

  const handleSubmit = e => {
    e.preventDefault();  
    createdeviceId(device, parameter)
  }
  if(isError){
    return(
      console.log(isError)
    )
  }

    return (
      <Fragment>
          <Container id="smallerContainer" >
            <p id="createIdTitle">Select Device Type and Parameter </p>
            <form >
              <label className="dropdownMenu" id="deviceMenu">
                Device Type :
                 <select
                  onChange={e => handleDeviceChange(e)}>
                  {devicetypes.map(device => (
                    <option key={device.device_name} value={device.device_name}>
                      { device.device_name}
                    </option>
                  ))}
                </select>
              </label>
              <br>
              </br>
              <label className="dropdownMenu" id="parameterMenu">
                Parameter Type :
                <select 
                   onChange={e => handleParameterChange(e)} >
                  { Object.keys(parameters).map(parameter => (
                   <option key={parameter} value={ parameter } >
                    { parameter }
                  </option> 
                  ))}
                </select>
              </label>
              <br />
              <button onClick={e => handleSubmit(e)}  id="idSubmitButton" >Submit</button>
              <br />
              <br />
            </form>

            <Card id="copyCard">

              <div id="copyParentDiv">
                <CopyToClipboard  text={ "asas" } id="copyButton" >
                  <AiFillCopy />
                </CopyToClipboard>
              </div>
            </Card>


          </Container >
        {/* </Container > */}
      </Fragment>
    );
  }
  CreateId.propTypes = {
    createId: PropTypes.func.isRequired
};


export default connect(null, {createdeviceId})(CreateId);