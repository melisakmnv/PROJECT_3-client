import React from 'react'
import FormSignin from '../components/Auth/FormSignin'
import FormSignup from '../components/Auth/FormSignup'
import '../styles/Account.css'


const Account = () => {
    return (
        <div className="main-container">
            <div className="account-container">

            </div>

            <div className="login-bx">
            </div>
            <FormSignin />

            <div className="signup-box">
            </div>
            <FormSignup />
        </div>
    )
}

export default Account