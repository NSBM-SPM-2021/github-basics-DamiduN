import axios from "axios";
const instance = axios.create({
    baseURL:"https://backend-savory.herokuapp.com",
});

export default instance;