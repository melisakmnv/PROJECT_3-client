import React, { Component, useState } from "react";
import axios from 'axios';




class UploadImg extends Component {

    state = {
        image: null,
    }

    handleChange = event => {

        this.setState({
            image: event.target.files[0],
            loaded: 0,
        })
    }

    handleFileUpload = event => {
        console.log('the new file upload is :', event.target.files[0]);
    }


    onClickHandler = (event) => {
        const data = new FormData()
        data.append('file', this.state.image)

        axios.post(process.env.REACT_APP_BACKEND_URL +'/api/plants', data)
        .then(res => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleFileUpload} />
                    <button onClick={this.onClickHandler} type="submit">Upload</button>
                </form>
            </div>
        )
    }
}


export default UploadImg
