import React from 'react';
import { Link } from 'react-router-dom';
import ShowPlant from '../Plants/ShowPlant'
import '../../styles/DisplayPlants.css'


const LinkPlant = (props) => {
    const { plant } = props;
    return (
        <div className="Plant__Card">

            <Link className="Link" to={`/plants/${plant._id}`}>
                <>
                    <img className="Plant__Image" />
                    <div className="Plant__name"><h2>{plant.plantName}</h2></div>

                </>
            </Link>

        </div>
    )
}

export default LinkPlant