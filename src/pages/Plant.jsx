import React from 'react'
import FormPlant from '../components/Plants/FormPlant'
import DisplayPlants from '../components/Plants/DisplayPlants'
import EditPlant from '../components/Plants/EditPlant'

const Plant = () => {
    return (
        <div>
            <h1>Hello from Plant</h1>
            <p>This page contains "DisplayPlant" component , a button "Add your Plant" and "FomrPlant" component </p>

            <p>There will be cards of plants when we click, it will display only 1 plant</p>
            {/* <FormPlant /> */}

            <DisplayPlants />
        </div>
    )
}

export default Plant