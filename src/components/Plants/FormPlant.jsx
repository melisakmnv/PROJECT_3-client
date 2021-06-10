
import React, { Component } from 'react'
import axios from 'axios'

class FormPlant extends Component {

    state = {
        plantName : "",
        nameLatin : "",
        species : "",
        family: "",
        description: "",
        image:""
    }

    handleChange = event => {
         const { name, value } = event.target;
         this.setState({
             [name]: value,
         })
    }

    handleSubmit = event => {

        const addPlant = {

            plantName : this.state.plantName,
            nameLatin : this.state.nameLatin,
            species : this.state.species,
            family : this.state.family,
            description: this.state.description
        };

        axios
        .post(process.env.REACT_APP_BACKEND_URL + '/api/plants', addPlant)
        .then((response) => {
            console.log(response.data.newPlant)
           
            this.setState({
                plantName : '',
                nameLatin : '',
                species : '',
                family : '',
                description : ''
            })
        })
        .catch((error) => {
            console.log(error)
        })

        event.preventDefault();
        console.log("clickeddd")
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="plantName">Nom de la plante</label>
                    <input 
                        type="text" 
                        name="plantName"
                        id="plantName"
                        value={this.state.plantName}
                        onChange={this.handleChange}
                    />


                    <label htmlFor="nameLatin"> Nom latin </label>
                    <input 
                        type="text" 
                        name="nameLatin"
                        id="nameLatin"
                        value={this.state.nameLatin}
                        onChange={this.handleChange}
                    />


                    <label htmlFor="species"> Espèce </label>
                    <input 
                        type="text" 
                        name="species"
                        id="species"
                        value={this.state.species}
                        onChange={this.handleChange}
                        
                    />


                    <label htmlFor="family"> Famille </label>

                    <input 
                        type="text" 
                        name="family"
                        id="family"
                        value={this.state.family}
                        onChange={this.handleChange}
                    
                    />


                    <label htmlFor="description"> Description </label>

                    <textarea 
                        type="text" 
                        name="description"
                        id="description"
                        value={this.state.description}
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

export default FormPlant