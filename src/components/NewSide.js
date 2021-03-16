import React, { Fragment, Component } from 'react';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import CreateId from '../container/CreateId';
import DeviceParameter from '../container/DeviceParameter';
import DeviceType from '../container/DeviceType';
import '../cssStyle/NewSide.css';

class NewSide extends Component {
    render() {
        return (
            <Fragment>
                <div >
                    <Tab.Container defaultActiveKey="first" >
                        <Row>

                            <Col id="sidenavContainer" >
                                <h3 id="leftnavHeader">Admin Panel</h3>
                                <Nav variant="pills" className="flex-column"  id="tabContainer">
                                    <Nav.Item id="idTab">
                                        <Nav.Link eventKey="first">Create Device Id</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item id="deviceTab">
                                        <Nav.Link eventKey="second">Device Type</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item id="parameterTab">
                                        <Nav.Link eventKey="third">Parameter Type</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col>
                                <Container id="pane-container">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <CreateId />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <DeviceType />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <DeviceParameter />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Container>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>



            </Fragment>

        )

    }
}

export default NewSide;

