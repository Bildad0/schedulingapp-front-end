"use client"
import Image from 'next/image'
import { ThemeProvider } from "@material-tailwind/react";
import { Carousel, Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <ThemeProvider>
          <main className="min-h-fit relative">

                {/* Nav Bar */}
        <div className='flex flex-row justify-between  sticky top-0 bg-cyan-200'>
          <div className="flex  p-3">
         
          <h1 className='font-bold text-xl text-blue-900'>
          SHIFTSY SCHEDULING
            </h1>
          </div>
       
          <div className='hidden sm:hidden md:flex lg:flex xl:flex'>
            <ul className='flex flex-row gap-5'>
              <li>FEATURES</li>
              <li>BLOG</li>
              <li className="bg-black p-2">TRY SCHEDULING</li>
              <li>LOGIN </li>
            </ul>
          </div>
        </div>
      {/* Top section */}
      <div className='p-2 sm:p-2 md:p-8 lg:p-8 xl:p-8  text-white bg-fixed bg-contain  sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover backgroud-image'>
    

        {/* First section */}
        <div className="ml-auto mr-auto flex place-content-center p-8 ">
          <h2 className='text-center p-3 text-xl font-md bg-white text-black '>Simple scheduling</h2>
        </div>
       
        
        <h2 className='text-blue-500 font-bold text-lg font-serif text-center p-6 '>SCHEDULE APPOINTMENT</h2>
        <div className="ml-auto mr-auto flex place-content-center ">
        <p className="p-3 font-bold text-3xl text-center text-slate-900">Then wait for notifications</p>
        </div>
        
        <div className="flex flex-col sm:flex-col md:hidden lg:hidden xl:hidden gap-5 p-8">
          <button className='border-2 bg-blue-600 border-blue-600 text-white p-2 rounded-full font-bold'>Log In</button>
          <button className="border-2 bg-transparent text-blue-600 border-blue-600 rounded-md p-2 font-bold">Try Scheduling</button>
        </div>
        </div>
   
      {/* Second section features section*/}

      <div className="p-4">
        <h1 className='text-center font-bold text-blue-900 text-2xl p-5'>Features</h1>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white rounded-md m-8 text-center '>
            <li className="flex place-content-center">
              <Image src="https://media.istockphoto.com/id/1313851605/vector/records-management-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=UonbHm1aI44c1jfL0UexZLR6w_Toelb6iZmY1VQ2e-U="
                alt="first importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              />
            </li>
            <li className="p-4">
              <h1 className="font-bold text-xl trext-blue-900">Keeping track of your meetings and events</h1>
            </li>
            <li className='p-4'>
              <p className="font-sm">Don&apos;t be late again. Make sure you get notification 1 hour before the meeting starts, to prepare well. </p>
            </li>
          </ul>
        </div>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white text-center rounded-md m-8'>
            <li className="flex place-content-center">
              <Image src="https://st2.depositphotos.com/1552219/8982/i/450/depositphotos_89822064-stock-photo-clock-time-punctual.jpg"
                alt="second importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              /></li>
            <li className="p-4">
              <h1 className="font-bold text-xl trext-blue-900">Helping you keep time</h1>
            </li>
            <li className='p-4'>
              <p>Our system is designed in a way that your top and important schedules are announced too early to make sure you don&apos;t forget about them. </p>
            </li>
          </ul>
        </div>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white text-center rounded-md m-8'>
            <li className="flex place-content-center">
              <Image src="https://static.vecteezy.com/system/resources/previews/004/264/987/original/the-best-memories-modern-calligraphy-inscription-wall-art-decor-design-wedding-photo-album-vector.jpg"
                alt="third importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              /></li>
            <li className="p-4">
              <h1 className="font-bold text-xl trext-blue-900">Memories</h1>
            </li>
            <li className='p-4'>
              <p className="font-sm">Gives you alert on the most important previous events or Activities with your loved ones. </p>
            </li>
          </ul>
        </div>
      </div>


      {/* Third section testimonial section
//TODO: Add this section when the app has real users      
      */}
 <div className="m-3 border-2 border-slate-500 rounded-md bg-white hidden">
   <Carousel className="h-80 w-full">
      <div className="flex p-8 flex-row gap-2 place-content-between">
       <Image src="" alt="first user" width={100} height={200} />
      <p>Hi first slide</p>
      </div>
      <div className="flex p-4 flex-row">
      <p>Second slid</p>
      </div>
      <div className="flex p-4 flex-row">
      <p>Third slide</p>
      </div>
    </Carousel>
 </div>
  
     
    </main>
    </ThemeProvider>

  )
}
