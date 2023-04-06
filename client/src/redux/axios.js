import axios from 'axios';


const instance = axios.create({
    baseURL:  "https://bolsillo-feliz-production.up.railway.app"
});

export default instance;