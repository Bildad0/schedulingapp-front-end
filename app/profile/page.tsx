
"use client"
import { useState, useEffect } from "react"
import instance from "../utils/axiosInstance";
import { ToastContainer, toast} from 'react-toastify';
import Image from 'next/image';
import { userType } from "../utils/type";


function Profile() {
    const [userDetails, setUserDetails] = useState(userType);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
        var userId = JSON.stringify(localStorage.getItem("userId"));
        const id = userId.slice(1, -1);
        console.log("user id",id);
          instance.get(`users/profile/${id}`).then((response) => {
            if (response.status == 200) {
                console.log(response.data.data);
                setUserDetails(response.data.data);
                toast.success("welcome!");
            } else {
              toast.error(`${response.data.message}`);
              console.log(response.data.message);
              } 
        }).finally(()=>setIsLoading(false));
    },[])
    return (
      <div className="min-h-screen bg-gray-200 p-3">
    {isLoading ?
          <div className="text-center text-blue-800 p-10">
            <h2 className="font-serif">Loading...</h2>
          </div>
          :
          <div className=" flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row place-content gap-3">
            <div className="card p-4 box-shadow-xl  bg-white flex flex-col text-center rounded-md">

              <div className="ml-auto mr-auto place-content-between m-3 h-fit w-fit rounded-full flex flex-row gap-3">
              <Image 
                loading="lazy"  
                src={userDetails.imageUrl} 
                alt="profile" 
                height={80}
                width={60}
                className="place-content-center"
              />
                <div className="m-3 place-content-end">
                <h1 className="text-green-400 p-2">Edit</h1>
                </div>
              </div>
              <h1>Email: {userDetails.email} </h1>
              <h2>Name: {userDetails.username} </h2>
             </div>
          <div className="card shadow-md bg-white flex place-content-between"><h1 className="p-3">Calender <span>&gt;</span></h1></div>
          <div className="card shadow-md bg-white flex place-content-between"><h1 className="p-3">Download Our mobile app <span>&gt;</span></h1></div>
          <div className="card shadow-md bg-white flex place-content-between"><h1 className="p-3">Terms and conditions <span>&gt;</span></h1></div>
          <div className="card shadow-md bg-white flex place-content-between"><h1 className="p-3">Sign out <span>&gt;</span></h1></div>
            
            <div className="text-center bg-white p-4">
              <h2>Join us on Social media</h2>
              <div className="flex flex-row gap-3 place-content-center">
                <div>Icon</div>
                <div>Icon</div>
                <div>Icon</div>
              </div>
            </div>
        </div>
    }
      
      </div>

    )
}


export default Profile