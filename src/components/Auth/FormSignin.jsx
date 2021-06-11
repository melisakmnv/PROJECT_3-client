
import React, { Component } from 'react'

class FormSignin extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleChange = event => {

    }



    render() {
        return (
            <div>
                <h2>Connexion</h2>
                <form>
                    <label htmlFor="email"> Email </label>
                    <input type="text" name="email" />


                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" />


                    <button>Connexion</button>

                </form>

            </div>
        )
    }
}

export default FormSignin