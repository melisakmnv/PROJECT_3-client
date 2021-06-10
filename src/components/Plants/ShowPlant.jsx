import React, { Component } from 'react';
import axios from 'axios';
import CardPlant from './CardPlant';

class ShowPlant extends Component {

    state = {
        plant : null
    }




    componentDidMount(){
        
        const id = this.props.match.params.plantId

        axios
        .get(process.env.REACT_APP_BACKEND_URL + '/api/plants/' + id )
        .then((response) => {
            console.log(response.data.documents)
            this.setState({
                plant : response.data.documents
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {

        return (
            <div className="One__Card">
                <p>Hello ShowPlant</p>
                {this.state.plant && <CardPlant plantProps={this.state.plant} />}
                {/* Since we set plant in state as null => it will first render null => then render new state in CDM ((Lifecycle)) */}
            </div>
        )
    }
}


export default ShowPlant