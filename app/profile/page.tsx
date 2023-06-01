
"use client"
import { useState, useEffect } from "react"
import instance from "../utils/axiosInstance";
import { ToastContainer, toast} from 'react-toastify';


function Profile() {
    const [userDetails, setUserDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        var userId = JSON.stringify(localStorage.getItem("userId"));
        const id = userId.slice(1, -1);
        console.log("user id", id);
        setIsLoading(true);
          instance.get(`users/profile/${id}`).then((response) => {
            if (response.status == 200) {
                console.log(response.data.data);
                setUserDetails(response.data.data);
                toast.success("welcome!");
              } toast.error(`${response.data.message}`);
              console.log(response.data.message)
        }).finally(()=>setIsLoading(false));
    },[])
    return (
        <div className="min-h-screen bg-gray-200 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      
            <div className="card p-2 box-shadow-xl">Profile details</div>
            <div><h1>Name:{userDetails.username} <span></span></h1></div>
            <hr />
            <div>Edit profile</div>
            <div>Create personal reminders</div>

        </div>
    )
}


export default Profile