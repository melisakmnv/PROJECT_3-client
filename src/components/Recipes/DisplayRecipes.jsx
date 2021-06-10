import React, { Component } from 'react';
import axios from 'axios';
import apiHandle from '../../api/ApiHandler'
import LinkRecipe from './LinkRecipe'




class DisplayRecipes extends Component {


    state = {
        recipes : []
    }

    componentDidMount(){


        axios
        .get(process.env.REACT_APP_BACKEND_URL + '/api/recipes')
        .then((response) => {
            console.log(response)
            this.setState({
                recipes: response.data.recipes
            })
        })
        .catch((error) =>{
            console.log(error)
        })

    }
    render() {
        return (
            <div className="Plant__Card__Box">
            {this.state.recipes.map((dataRecipe) => {
                return <LinkRecipe key={dataRecipe._id} recipe={dataRecipe} />;
            })}
    </div>
        )
    }
}

export default DisplayRecipes