import React from 'react'
import FormPlant from '../components/Plants/FormPlant'
import DisplayPlants from '../components/Plants/DisplayPlants'
import EditPlant from '../components/Plants/EditPlant'

const Plant = () => {
    return (
        <div>
            <DisplayPlants />
            <FormPlant />
        </div>
    )
}

export default Plant