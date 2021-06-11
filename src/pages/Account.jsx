import React from 'react'
// import UploadImg from '../components/UploadImg'
import FormSignin from '../components/Auth/FormSignin'
import FormSignup from '../components/Auth/FormSignup'

const Account = () => {
    return (
        <div>
            <h1>Hello from Account</h1> 
            {/* <UploadImg /> */}
            <FormSignin />
            <FormSignup />
        </div>
    )
}

export default Account