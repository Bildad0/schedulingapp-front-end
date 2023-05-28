"use client"
import {useState} from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { login } from "../utils/api"
import Link from "next/link";


function Login() { 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
  

    const handleSubmit = () => {
        const userData = { input:email, password:password, };
        setIsLoading(true)
        login(userData).then(() => setIsLoading(false)).finally(() => {
            <Link href="/dashboard"/>
        })
    }

    return (
        <div className="">
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
        />
            <div className="p-10">
                <h1 className="text-center p-6 font-bold text-xl text-sky-900">Log In to your Account</h1>
<form className="flex flex-col p-6 gap-2 bg-sky-500 rounded-md" >
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email">
                    Email
                </label>
                <input
                    className="rounded-md p-4"
                    type="email"
                    autoComplete="true"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => {
                        e.preventDefault();
                        const data = e.target.value;
                        setEmail(data);
                    }}
                />
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password">
                    Passowrd
                </label>
                <input
                    className="rounded-md p-4"
                    type="password"
                    id="password"
                    placeholder="*******"
                    onChange={(e) => {
                        e.preventDefault()
                        const value = e.target.value
                        setPassword(value)
                    }}
                />

                <button
                type="button"
                onClick={()=>handleSubmit()}
                className="bg-sky-300 shadow-xl hover:bg-white hover:text-sky-900 w-fit p-3 ml-auto mr-auto font-serif font-bold text-xl rounded-full">
                            Log In
                </button>
            </form>
            <div>
                <h1 className="text-center p-5 text-blue-950">
                    Forgot Password? <span className="hover:underline decoration-pink-500"><a href="">Reset</a></span>
                </h1>
            </div>
        </div>

    </div>)
}
export default Login