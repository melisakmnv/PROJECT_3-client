import React from 'react'

const CardRecipe = (props) => {

    

    return (
        
        <div className="Card">
            <div className="Head__Card">
                <h1>{props.recipeProps.recipeName}</h1>
            </div>

            <div className="Recap__Card">
                <img />
                <p>Ingrédients</p>
                <p>Famille : {props.recipeProps.ingredients}</p>
                <p>Saison : _____ </p>
            </div>

            <hr />

            <div className="Content__Card">

                <p>Idées Cuisine TAG RECIPE GOES HERE</p>
                <p>Famille : {props.recipeProps.family}</p>
                <p>Saison : _____ </p>

            </div>

            <div className="Content__Card">
                <p>Saveurs et odeurs</p>
                <p>Famille : </p>
                <p>Saison : _____ </p>
            </div>

            <div className="Content__Card">
                <p>Sources et liens</p>
                <p>Famille : </p>
                <p>Saison : _____ </p>
            </div>
        </div>
    )
}

export default CardRecipe