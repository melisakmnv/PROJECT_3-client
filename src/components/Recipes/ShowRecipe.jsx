import React, { Component } from 'react'
import axios from 'axios'
import CardRecipe from './CardRecipe'

class ShowRecipe extends Component {

    state = {
        recipe: null
    }


    componentDidMount() {
        const recipeId = this.props.match.params.recipeId

        axios
            .get(process.env.REACT_APP_BACKEND_URL + '/api/recipes/' + recipeId)
            .then((response) => {
                console.log("response >>>>> ")
                console.log(response.data.documents)
                this.setState({
                    recipe: response.data.documents
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {


        return (
            <div className="One__Card">
                <p>Hello card recipe</p>
               {this.state.recipe && <CardRecipe recipeProps={this.state.recipe} />}
                {/* Since we set plant in state as null => it will first render null => then render new state in CDM ((Lifecycle)) */}
            </div>
        )
    }
}


export default ShowRecipe