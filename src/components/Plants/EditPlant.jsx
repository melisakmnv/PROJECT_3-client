import React, { Component } from 'react'
import axios from 'axios'

class EditPlant extends Component {

    state = {
        plantName: "",
        nameLatin: "",
        species: "",
        family: "",
        description: "",
        image: ""
    }



    componentDidMount() {

        const id = this.props.match.params.plantId


        axios
            .get(process.env.REACT_APP_BACKEND_URL + '/api/plants/' + id)
            .then((response) => {

                this.setState({
                    plantName: response.data.documents.plantName,
                    nameLatin: response.data.documents.nameLatin,
                    species: response.data.documents.species,
                    family: response.data.documents.family,
                    description: response.data.documents.description
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        const id = this.props.match.params.plantId

        const editPlant = {

            plantName: this.state.plantName,
            nameLatin: this.state.nameLatin,
            species: this.state.species,
            family: this.state.family,
            description: this.state.description
        };

        axios
            .patch(process.env.REACT_APP_BACKEND_URL + '/api/plants/' + id, editPlant)
            .then((response) => {
                console.log(response.data.documents)
                console.log("updated successfully")

            })
            .catch((error) => {
                console.log(error)
            })

        //Redirect to plants

        this.props.history.push('/plants')

        event.preventDefault();
        console.log("clickeddd")
    }


    render() {
        return (
            <div>
                <h1>Ajouter une nouvelle plante :) </h1>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="plantName"> Plant Name </label>
                    <input
                        type="text"
                        name="plantName"
                        id="plantName"
                        value={this.state.plantName}
                        onChange={this.handleChange}
                    />


                    <label htmlFor="nameLatin"> Latin Name </label>
                    <input
                        type="text"
                        name="nameLatin"
                        id="nameLatin"
                        value={this.state.nameLatin}
                        onChange={this.handleChange}
                    />


                    <label htmlFor="species"> Species </label>
                    <input
                        type="text"
                        name="species"
                        id="species"
                        value={this.state.species}
                        onChange={this.handleChange}

                    />


                    <label htmlFor="family"> Family </label>

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

export default EditPlant