import React, { Component } from 'react'
import axios from 'axios';
// import apiHandle from '../../api/ApiHandler'
import LinkPlant from './LinkPlant';
import '../../styles/DisplayPlants.css'

console.log(process.env.REACT_APP_BACKEND_URL)

class DisplayPlants extends Component {

    state = {
        plants: []
    };

    componentDidMount() {
        // apiHandle.getPlants
        axios
            .get(process.env.REACT_APP_BACKEND_URL + '/api/plants')
            .then((response) => {
                console.log(response)
                this.setState({
                    plants: response.data.plants
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="Plant__Card__Box">
                {this.state.plants.map((dataPlant) => {
                    return <LinkPlant key={dataPlant._id} plant={dataPlant} />;
                })}
            </div>
        )
    }
}
export default DisplayPlants
