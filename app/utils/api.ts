import instance from "./axiosInstance";
import { toast } from  'react-toastify';
// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: "localhost:3000/api/auth/register",
//     cache: new InMemoryCache(),
// });

// export default client;
// TODO set up axios API in the meantime as i look more into graphql API

// register user
export const register = async (payload: {}) => {
    try {
        const res = await instance.post("auth/register", payload);
        if (res.status == 200) {
            console.log(res.data.data)
            localStorage.setItem("user", res.data.data);
            localStorage.setItem("userId", res.data.data.id)
            toast.success("User registered")
        }toast.error(res.data.message)
    } catch (error) {
        toast.error(`${error}`);
       
    }
 
}


export const login = async (payload:{}) => {
    try {
        const res = await instance.post("auth/login", payload);
        if (res.status == 200) { 
            console.log(res.data.token);
            localStorage.setItem("userToken", res.data.token);
            toast.success("Welcome back !");
            localStorage.setItem("userId", res.data.user.id);
        }toast.error(res.data.message)
    } catch (error) {
        toast.error(`${error}`);
    }
}

