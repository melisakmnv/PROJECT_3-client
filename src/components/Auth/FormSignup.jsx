
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class FormSignup extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = event => {
        const value = event.target.value;
        const key = event.target.name;
        this.setState({ [key]: value })
    }

    render() {
        return (
            <div>
                <h2>Nous rejoindre</h2>
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

                    <button> S'inscrire </button>
                </form>

            </div>
        )
    }
}

export default FormSignup