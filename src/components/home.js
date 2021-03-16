import React, { Component } from 'react'
import Header from './layout/Header'
import NewSide from './NewSide';
import { Container } from 'react-bootstrap';

export default class home extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <NewSide />
            </div>
        )
    }
}
