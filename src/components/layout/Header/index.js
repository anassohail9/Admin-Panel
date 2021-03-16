import React, { Fragment } from 'react';
import './style.css';
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../../actions/auth'
import PropTypes from 'prop-types'


const Header = ({ auth: { isAuthenticated, loading, user }, signout }) => {
  const guestlink = (
    <Navbar collapseOnSelect expand="lg" id="header">
      <Navbar.Brand href="/home" fixed="top" id="brandName" >E&amp;E Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      </Navbar.Collapse>
      <Link to="/Signin" className="sign-in">Sign In</Link>
    </Navbar>
  )

  const authlink = (
      <Navbar collapseOnSelect expand="lg" id="header">
        <Navbar.Brand href="/home" fixed="top" id="brandName" >E&amp;E Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        </Navbar.Collapse>
        <Link to="/Signin" onClick= { signout } className="sign-in">Log out</Link>
      </Navbar>
  )
  return (
    <Fragment>
      <nav >
        <Navbar id="footer">
          <p>All Right Reserved</p>
        </Navbar>
      </nav>

        {!loading  && (<Fragment>{isAuthenticated ? authlink : guestlink }</Fragment>)}
      
    </Fragment>
  )

}
Header.protoTypes = {
  signout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect( mapStateToProps, { signout })(Header);