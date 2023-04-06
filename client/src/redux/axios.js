import axios from 'axios';


const instance = axios.create({
    baseURL:  "bolsillo-feliz-production.up.railway.app"
});

export default instance;