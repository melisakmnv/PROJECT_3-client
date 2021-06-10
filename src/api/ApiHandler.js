import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

function errorHandler(error) {
  if (error.response && error.response.data) {
    console.log(error.response.data);
    throw error;
  }
  throw error;
}

const apiHandler =  {
    service,


    signup(userInfo) {
        return service
        .post("api/auth/signup", userInfo)
        .then((res) => res.data)
        .catch(errorHandler)
    },


    signin(userInfo) {
        return service
        .post("api/auth/signin", userInfo)
        .then((res) => res.data)
        .catch(errorHandler)
    },

    isLoggedIn() {
        return service
        .get("api/auth/isLoggedIn")
        .then((res) => res.data)
    },

    signout() {
        return service
        .get("api/auth/signout")
        .then((res)=> res.data)
        .catch(errorHandler)
    },

    getPlants() {
        return service
        .get("api/plants")
        .then((res) => res.data)
        .catch(errorHandler)
    },

    getRecipes() {
        return service
        .get("api/recipes")
        .then((res) => res.data)
        .catch(errorHandler)
    }
};

export default apiHandler;