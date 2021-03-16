import React, { useState, Fragment } from 'react'
import Header from '../../components/layout/Header'
import { Container } from 'react-bootstrap'
import './style.css'
import { login } from '../../actions/auth'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Signin = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = async e => {
        e.preventDefault();

        login(email, password)

    };

    if(isAuthenticated){
        return <Redirect to='/home' />;
    }

    return (
        <Fragment>

            <Header />

            <Container id="signin-div">
                <form className="form" onSubmit={e => submitHandler(e)}>
                    <div>
                        <h1>Sign In</h1>
                    </div>

                    <div>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            name='email'
                            required
                            onChange={e => handleChange(e)}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            placeholder="Enter password"
                            required
                            onChange={e => handleChange(e)}
                        ></input>
                    </div>
                    <div>
                        <label />
                        <button className="primary" type="submit">
                            Sign In
                                 </button>
                        <label id="register">
                            <label id="register-text">Don't have an Account ? <Link to="/Signup" className="link">Sign up</Link></label>
                        </label>

                    </div>
                </form>
            </Container>

        </Fragment>

    )
};
Signin.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => { 
    return {
    isAuthenticated: state.auth.isAuthenticated 
}
};

 export default connect( mapStateToProps, { login })(Signin);
