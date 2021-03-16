import { React, Fragment, Component, useState, useEffect } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap';
import '../cssStyle/DeviceParameter.css';
import { ParameterTable } from '../components/layout/Table'; 
import axios from 'axios'

const DeviceParameter = () => {

    
      const [devicetype, setdevicetype] = useState('')
      const [devicetypes, setdevicetypes] = useState([])
    
  
 const handleChange = (e) => {
    setdevicetype({ devicetype: e.target.value })
  }

useEffect(() => {
  axios.get('/getDeviceTypes')
  .then(response => { setdevicetypes(response.data)})
  .then(error => { console.log(error)})
}, [])

    return (
      <Fragment>
          <Container id="smallContainer">
            <Tabs defaultActiveKey="view" >
              <Tab eventKey="view" title="View Parameter Type" id="viewParameterTab">
                <label id="viewParameterLabel">View Parameter Type</label>
                <label id="DeviceType">Device Type
                          <select
                        onChange={e => handleChange(e)}>
                        {devicetypes.map(device => (
                          <option key={device.device_code} value={device.device_name}>
                            { device.device_name}
                          </option>
                        ))}
                      </select>
                    </label>
                <ParameterTable devicetype={devicetype.devicetype}/>
              </Tab>
              <Tab eventKey="add" title="Add Parameter Type" id="addParameterTab">
                <label id="addParameterLabel">Enter  Parameter Details</label>
              </Tab>
              <Tab eventKey="update" title="Update Parameter Type" id="updateParameterTab">
               <label id="updateParameterLabel">Update Parameter Type</label>
              </Tab>
            </Tabs>
          </Container>
      </Fragment>
  
    )
  }


export default DeviceParameter;