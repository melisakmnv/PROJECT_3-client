import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/DisplayPlants.css'


const LinkRecipe = (props) => {
    const {recipe} = props
    return (
        <div className="Plant__Card">
            <p>Hello LinkRecipe</p>
            <Link className="Link" to={`/recipes/${recipe._id}`}>
                <>
                    <img className="Plant__Image"/>
                    <h2>{recipe.recipeName}</h2>
                </>
            </Link>
        </div>
    )
}

export default LinkRecipe
