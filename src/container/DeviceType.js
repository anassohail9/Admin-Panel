import React, { useState, Fragment, useEffect } from 'react';
import '../cssStyle/DeviceType.css';
import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import {DeviceTable} from '../components/layout/Table/index';
import axios from 'axios';
import { addDevice } from '../actions/devicetype'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const DeviceType = ({addDevice}) => {

  const [deviceDesc, setdeviceDesc] = useState('')
  const [deviceName, setdeviceName] = useState('')
  const [users, setusers] = useState([])
  const [devicetype, setdevicetype] = useState('') 

  const handleDescChange = (event) => {
    setdeviceDesc({ deviceDesc: event.target.value })
  }

  const handleNameChange = (event) => {
    setdeviceName({ deviceName: event.target.value })
  }

  //Add Submit handler

  const handleAddSubmit = async e => {
    e.preventDefault();
    addDevice(`${deviceName.deviceName}`,`${deviceDesc.deviceDesc}` );
  }

  const handleDeviceChange = (event) => {
    setdevicetype({ devicetype: event.target.value });
  }

  const handleUpdateSubmit = (event) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then(response => { console.log(response) })
      .catch(error => { console.log(error) })
    event.preventDefault();
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => { setusers({ users: response.data }) })
      .catch(error => { setusers({ isError: true }) })

  }, [])

  return (
    <Fragment>
      <Container id="smallContainer">
        <Tabs defaultActiveKey="view">
          <Tab eventKey="view" title="View Device Type" id="viewTab">
            <label id="viewTabHeader">View Device Type</label>
            <DeviceTable >
            </DeviceTable>
          </Tab>
          {/* add device tab */}
          <Tab eventKey="add" title="Add Device Type" id="addTab">
            <label id="addTabHeader">Enter Description and Name to Add Device Type</label>
            <Row>
              <Col md="6">
                <form id="addDeviceForm" onSubmit={e => handleAddSubmit(e)}>
                  <div>
                    <label id="descLabel">Device Description</label>
                    <input
                      type="text"
                      onChange={e => handleDescChange(e)}
                      id="descTextbar"
                    />
                  </div>
                  <br></br>
                  <div>
                    <label id="nameLabel">Device Name</label>
                    <input
                      type="text"
                      onChange={e => handleNameChange(e)}
                      id="nameTextbar"
                    />
                  </div>
                  <button type="primary" id="addDeviceSubmitButton">Submit</button>
                </form>
              </Col>
            </Row>
          </Tab>
{/*UpDate Tab */}          
          <Tab eventKey="update" title="Update Device Type" id="updateTab">
            <label id="updateTabHeader">Update Device Type</label>
            <Row>
              <Col md="6">
                <form id="updateDeviceForm" onSubmit={e => handleUpdateSubmit(e)}>
                  <div>
                    <label id="addDeviceType">Device Type
                          <select
                        value={devicetype}
                        onChange={e => handleDeviceChange(e)}>
                        {Object.keys(users).map(user => (
                          <option key={user.id} value={user.username}>
                            { user.username}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div>
                    <label id="descLabel">Device Description</label>
                    <input
                      type="text"
                      value={deviceDesc}
                      onChange={e => handleDescChange(e)}
                      id="descTextbar"
                    />
                  </div>
                  <br></br>
                  <div>
                    <label id="nameLabel">Device Name</label>
                    <input
                      type="text"
                      value={deviceName}
                      onChange={e => handleNameChange(e)}
                      id="nameTextbar"
                    />
                  </div>
                  <button type="primary" id="addDeviceSubmitButton">Submit</button>
                </form>
              </Col>
            </Row>
          </Tab>

        </Tabs>
      </Container>

    </Fragment>

  )
}

DeviceType.propTypes = {
  addDevice: PropTypes.func.isRequired,
};

export default connect( null, {addDevice})(DeviceType);