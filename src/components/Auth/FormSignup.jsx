
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class FormSignup extends Component {

    state = {
        username : "",
        email : "",
        password : ""
    }

    handleChange = event => {
        const value = event.target.value;
        const key = event.target.name;
        this.setState({[key] : value})
    }

    render() {
        return (
            <div>
                <form>

                    <label htmlFor="username"> Username </label>
                    <input 
                        type="text" 
                        name="username"
                        id="username"
                    />


                    <label htmlFor="email"> Email </label>
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                    />


                    <label htmlFor="password"> Password </label>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                    />

                    <button> Join </button>
                </form>

                <div>
                    <p>Already have an account ?</p>
                    <Link to="/signin">Signin</Link>
                </div>
                
            </div>
        )
    }
}

export default FormSignup