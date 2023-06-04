"use client"
import Link from 'next/link';
import NavBar from './components/navBar';
import Features from './components/features';
import Testimonials from './components/testimonials';
import Footer from './components/footer';




export default function Home() {
  return (
   
  <main className="min-h-fit bg-gray-200">  
 

      {/* First section */} 
      <div className=' text-white bg-fixed bg-contain  sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover backgroud-image'>
             {/* Nav Bar */}
             <div className="sticky top-0">
              <NavBar/>
              </div>
      <div className="p-2 sm:p-2 md:p-8 lg:p-8 xl:p-8">
      <div className="ml-auto mr-auto flex place-content-center p-8 ">
       <h2 className='text-center p-3 text-xl font-md bg-white text-black '>Simple scheduling</h2>
      </div>

        <h2 className='text-blue-500 font-bold text-lg font-serif text-center p-6 '>SCHEDULE APPOINTMENT</h2>
        <div className="ml-auto mr-auto flex place-content-center ">
        <p className="p-3 font-bold text-3xl text-center text-slate-900">Then wait for notifications</p>
        </div>
        
        <div className="flex flex-col sm:flex-col md:hidden lg:hidden xl:hidden gap-5 p-8">
          <button className='border-2 bg-blue-600 border-blue-600 text-white p-2 rounded-full font-bold'><Link href="/comingsoon" className="p-2">Get our Mobile App</Link></button>
          <button className="border-2 bg-transparent text-blue-600 border-blue-600 rounded-md p-2 font-bold"><Link href="/getstarted/signup">Try Scheduling</Link></button>
        </div>
          </div>
        </div>
   
      {/* Second section features section*/}
      <Features />
      {/* Third section testimonial section
//TODO: Add this section when the app has real users      
      */}
      <Testimonials />
      {/* Footer */}
      <Footer />
    </main>
  )
}
