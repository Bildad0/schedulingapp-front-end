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
export const register = async (payload: any) => {
    try {
        const res = await instance.post("auth/register", payload);
        if (res.status == 200) {
            localStorage.setItem("user",res.data);
            toast.success("User registered")
        }
    } catch (Error:any) {
      
        toast.error(`${Error.response.data.message}`);
       
    }
 
}


export const login = async (payload: any) => {
    try {
        const res = await instance.post("auth/login", payload);
        if (res.status == 200) { 
            console.log(res.data);
            localStorage.setItem("userToken", res.data);
            toast.success("Welcome back !")
        }
    } catch (Error:any) {
        toast.error(`${Error.response.data.message}`);
    }
}