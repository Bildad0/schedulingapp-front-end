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
        <div className="min-h-screen bg-gray-200">
         <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                className="m-4"
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
                    <div className="flex flex-row mt-3 gap-3 place-content-between">
                    <button
                        type="button"
                        onClick={()=>handleSubmit()}
                        className="border-2 border-black shadow-xl  hover:text-sky-900 p-2  font-serif font-bold text-md rounded-md">
                        Log In
                        </button>
                        <div className="">
                <Link href="/">
                <h1 className="text-center p-5 text-blue-900"><i>Forgot Password?</i></h1>
                </Link>
            </div>
                    </div>

              
            </form>
          
        </div>

    </div>)
}
export default Login