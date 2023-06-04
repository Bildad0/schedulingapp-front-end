"use client"

import NavBar from "../components/navBar"


function ComingSoon() {
    return (
        <div className="min-h-screen bg-gray-200">
        <div className="sticky top-0">
        <NavBar />
        </div>
            <div className="text-center p-3 ml-auto mr-auto">
                <h1 className="text-2xl font-bold text-blue-900">Coming Soon</h1>
                <p>We are sorry for the inconvinience we&apos;ll communicate later. Thank you for your interest</p>
       </div>
    </div>
    )
}


export default ComingSoon