import axios from 'axios';

export default axios.create({
    baseURL: `https://todobackend-laravel.herokuapp.com/api`
});