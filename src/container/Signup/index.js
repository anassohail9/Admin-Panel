import React, { useState } from 'react'
import Header from '../../components/layout/Header'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { register } from '../../actions/auth'
import './style.css'
import PropTypes from 'prop-types'


const Signup = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password1: '',
        password2: ''
    });

    const { name, email, mobile, password1, password2 } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitHandler = async e => {
        e.preventDefault();
        if (password1 !== password2) {
            alert('password not matched')
        }
        else {
            register(name, email, mobile, password1)
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/home' />
    }
    return (
        <div>
            <Header />
            <Container id="signup-background">
                <Container id="signup-section">
                    <form className="signup-form" onSubmit={e => submitHandler(e)}>
                        <div>
                            <h2> Sign Up</h2>
                        </div>
                        <div>
                            <label htmlFor="name">Name
                            <input
                                    type="text"
                                    id="name"
                                    required={true}
                                    placeholder="Name"
                                    name="name"
                                    onChange={e => handleChange(e)}
                                    value={name} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">Email
                            <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required={true}
                                    placeholder="example@example.com"
                                    onChange={e => handleChange(e)}
                                    value={email} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="mobile">Mobile No.
                            <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    required={true}
                                    onChange={e => handleChange(e)}
                                    value={mobile} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password1">Password
                            <input
                                    type="password"
                                    id="password1"
                                    name="password1"
                                    required={true}
                                    onChange={e => handleChange(e)}
                                    value={password1} />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password2">Confirm Password
                            <input
                                    type="password"
                                    id="password2"
                                    required={true}
                                    name='password2'
                                    onChange={e => handleChange(e)}
                                    value={password2} />
                            </label>

                        </div>
                        <div>
                            <button type="submit" value="submit" id="signupSubmitButton">Register</button>
                        </div>
                        <div>
                            <label htlmFor="signin" id="signin-label">Already Have an Account?
                                <Link to="/Signin" className="link">  Sign In</Link>
                            </label>
                        </div>
                    </form>
                </Container>
            </Container>


        </div>
    )
}

Signup.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

    export default connect(mapStateToProps, { register })(Signup)