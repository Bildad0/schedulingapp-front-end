"use client"
import { useState } from "react"


function EditProfile() {
    const [fname, setFisrtName] = useState()
    const [lname, setLastName] = useState()
    const [email, setEmail]=useState()
    const [password, setPassword] = useState()
    const [username, setUsername]=useState()
    const [timezone, setTimeZone] = useState()
    const [image, setImage]=useState()
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
    
}


    return (
        <div className="min-h-screen bg-gray-300 p-3">
            <form className="card shadow-xl bg-white">
                <h1 className="text-center text-blue-900">Edit Personal details</h1>
                <div className="p-2">

                </div>
            </form>
        </div>)
}

export default EditProfile 