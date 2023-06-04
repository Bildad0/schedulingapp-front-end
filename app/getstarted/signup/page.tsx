
"use client"

import { useState } from "react"
import{register} from "../../utils/api"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [imageUrl, setImageUrl] = useState('');
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {
        const userData = {fname,lname, email:email,  password:password, username:userName, timezone:timeZone, };
        // should validate the values then set validate to true 
      
        console.log("from client", userData);
        setIsLoading(true);
        register(userData).then(() => setIsLoading(false)).finally(() => {
          console.log("User registered");
            return;
        });
       
    }

    return (
        <div className="min-h-screen">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
            />
            <div className="p-2 text-white">
                {/* loading indicator */}
                {isLoading ? <div className="bg-white">
                    <h1 className="ml-auto mr-auto text-blue-900 p-3">Submitting...</h1>
                </div> : <div className="hidden"></div>}

            <h1 className="text-blue-600 font-bold text-xl text-center p-3" >Sign Up for a free trial</h1>
                <div className="card rounded-md bg-blue-200 shadow-lg text-blue-800 ml-auto mr-auto sm:ml-auto sm:mr-auto md:m-40">
                    <form className="flex flex-col p-6 gap-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" >
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            autoComplete="true" 
                            id="email"
                            placeholder="name@domain.com"
                            className="rounded-md p-4 "
                            onChange={(e) => {
                                e.preventDefault();
                                const value = e.target.value;
                                setEmail(value)
                            }} />
                        <label className="block tetx-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
                        <input
                            required
                            type="text"
                            autoComplete="true"
                            id="firstName"
                            placeholder="First Name"
                            className="rounded-md p-4"
                            onChange={(e) => {
                                e.preventDefault();
                                const value = e.target.value;
                                setFname(value)
                            }}
                        />
                    <label className="block tetx-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
                        <input
                            required
                            type="text"
                            autoComplete="true"
                            id="lastName"
                            placeholder="Last Name"
                            className="rounded-md p-4"
                            onChange={(e) => {
                                e.preventDefault();
                                const value = e.target.value;
                                setLname(value)
                            }}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            User Name:
                        </label>
                        <input
                            required
                            type="text"
                            autoComplete="true" 
                            id="username"
                            placeholder="User Name"
                            className="rounded-md p-4"
                            onChange={(e) => {
                                e.preventDefault();
                                const value = e.target.value;
                                setUserName(value);
                            }}
                        />
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timezone">
                                Time Zone:
                            </label>
                        <select
                            id="timezone"
                            autoComplete="true" 
                            className="rounded-md p-4"
                            onChange={(e) => {
                                e.preventDefault();
                                const value = e.target.value;
                                setTimeZone(value)
                            }}
                        >
                            <option></option>
                            <option value="Nairobi">Nairobi, Kenya</option>
                            <option value="Mombasa">Mombasa, Kenya</option>
                            <option value="Kisumu">Kisumu, Kenya</option>
                        </select>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="password"
                            className="rounded-md p-4"
                            onChange={(e) => {
                                e.preventDefault();
                                const value = e.target.value;
                                setPassword(value);
                            }}
                        />

                        {isLoading ?
                            <button
                            className="bg-sky-6 shadow-xl hover:bg-white hover:text-sky-900 w-fit p-3 ml-auto mr-auto font-serif font-bold text-xl rounded-full"     
                            disabled 
                            type="submit">Sign up</button> :
                            <button
                            type="button"
                            onClick={()=>handleSubmit()}
                            className="bg-sky-6 shadow-xl hover:bg-white hover:text-sky-900 w-fit p-3 ml-auto mr-auto font-serif font-bold text-xl rounded-full"
                            >
                            Sign Up
                        </button>}
                    </form>
                </div>
        </div>
       </div>
    )
}

export default SignUp