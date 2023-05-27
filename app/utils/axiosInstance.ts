import axios from "axios";

const instance = axios.create({
    baseURL: 'http://172.26.0.1:3000/api/',
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
});
  
export default instance;