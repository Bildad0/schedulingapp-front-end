"use client"

import Link from "next/link"

const Footer = () => {
    return (
        <div>
              <div className="text-center sm:text-center md:text-start lg:text-start xl:text-start bg-gradient-to-t p-6 from-blue-400 to-emerald-500 h-fit flex flex-col place-content-between sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-x-1 sm:gap-x-1 md:gap-y-6 lg:gap-y-6 xl:gap-y-6">
          <div className='p-5 flex flex-col'>
            <h1 className="text-gradient-to-tr from-black to-blue-gray-300 font-bold text-3xl">SHIFTSYC</h1>
            <p className="p-3">WE ARE YOUR DEDICATED PARTNER FOR LIFE.</p>
          </div>
          <div>
            <ul className=" flex flex-col gap-3 text-start p-6">
              <li className="hover:underline"><Link href="/#features">FEATURES</Link></li>
              <li className="hover:underline">BLOG</li>
              <li>
                <button className="p-3 rounded-md border-2 bg-gray-700 text-white hover:bg-transparent">
                  <Link href="/getstarted/signup">TRY SCHEDULING</Link>
                </button>
              </li>
              <li>
                <button className="p-3 rounded-md border-2 bg-black text-white hover:bg-transparent">
                  <Link href="/login">
                  LOGIN
                </Link>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col place-content-center p-3 gap-4">
            <h3 className="text-start text-blue-900 font-bold">GET REGULAR UPDATES</h3>
            <form className="flex flex-row gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 rounded-md hover:border-none active:border-none"
              />
              <button className="bg-black text-white rounded-md p-2 hover:border-2">
                <span></span> GO
              </button>
            </form>
          
          
          </div>
        </div>
        <div className="bg-blue-400  text-center p-2 ">&copy; 2023 SHIFTSYC</div>
        </div>
    )
}

export default Footer