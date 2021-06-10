import React from 'react'
import FormRecipe from '../components/Recipes/FormRecipe'
import DisplayRecipes from '../components/Recipes/DisplayRecipes'

const Recipe = () => {
    return (
        <div>
            <h1>Hello from Recipe</h1>
            <FormRecipe />
            <DisplayRecipes />
        </div>
    )
}

export default Recipe