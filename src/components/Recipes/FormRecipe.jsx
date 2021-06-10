
import React, { Component } from 'react';
import axios from 'axios'

class FormRecipe extends Component {

    state = {
        recipeName : "",
        ingredients : "",
        duration : "",
        step: "",
        picture:""
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value,
        })
    }

    handleSubmit = event => {
        const addRecipe = {
            recipeName : this.state.recipeName,
            ingredients : this.state.ingredients,
            duration : this.state.duration,
            step: this.state.step,
            picture: this.state.picture
        };

        axios
        .post(process.env.REACT_APP_BACKEND_URL + '/api/recipes', addRecipe)
        .then((response) => {
            console.log(response.data.newRecipe)

            this.setState({
                recipeName : "",
                ingredients : "",
                duration : "",
                step: "",
                picture:""
            })
        }).catch((error) => {
            console.log(error)
        })

        event.preventDefault();
        console.log("adddeeddededed")
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="recipeName"> Recipe Name </label>
                    <input 
                        type="text" 
                        name="recipeName"
                        id="recipeName"
                        value={this.state.recipeName}
                        onChange={this.handleChange}
                    />


                    <label htmlFor="ingredients"> Ingredients </label>
                    <input 
                        type="text" 
                        name="ingredients"
                        id="ingredients"
                        value={this.state.ingredients}
                        onChange={this.handleChange}
                    />


                    <label htmlFor="duration"> Duration </label>
                    <input 
                        type="number" 
                        name="duration"
                        id="duration"
                        value={this.state.duration}
                        onChange={this.handleChange}
                        
                    />


                    <label htmlFor="step"> steps </label>
                    <input 
                        type="text" 
                        name="step"
                        id="step"
                        value={this.state.step}
                        onChange={this.handleChange}
                        
                    />



                    {/* <label htmlFor="image"> Image </label>
                    <input type="file" name="image"/> */}

                    <button>Submit</button>
                    
                </form>
                
            </div>
        )
    }
}

export default FormRecipe