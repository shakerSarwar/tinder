import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinderbackend7.herokuapp.com/'
})

export default instance;