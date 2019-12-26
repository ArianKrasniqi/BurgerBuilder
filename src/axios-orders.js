import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-f6e5e.firebaseio.com/'
});

export default instance;