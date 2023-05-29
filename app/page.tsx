import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-fit">
      {/* Top section */}
      <div className='  text-white bg-fixed bg-contain  sm:bg-contain md:bg-cover lg:bg-cover xl:bg-cover backgroud-image'>
        {/* Nav Bar */}
        <div className='flex flex-row justify-between p-5 sticky-top'>
          <div className="flex flex-row p-3">
            <Image src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="bg-transparent"
            />
          <h1 className='font-bold text-2xl text-blue-900'>
              Logo
            </h1>
          </div>
       
          <div className='hidden sm:hidden md:flex lg:flex xl:flex'>
            <ul className='flex flex-row gap-5'>
              <li>FEATURES</li>
              <li>BLOG</li>
              <li>CREATE ACCOUNT</li>
              <li>LOGIN </li>
            </ul>
          </div>
        </div>

        {/* First section */}
        <div className="ml-auto mr-auto flex place-content-center ">
          <h2 className='text-center p-3 text-xl font-md bg-white text-slate-600'>Simple scheduling</h2>
        </div>
       
        
        <h2 className='text-blue-500 font-bold text-lg font-serif text-center p-6 '>SCHEDULE APPOINTMENT</h2>
        <p className="p-6 font-bold text-3xl text-center">What&apos;s your main value preposition?</p>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 p-8">
          <button className='border-2 bg-blue-600 border-blue-600 text-white p-2 rounded-full font-bold'>Get Startded</button>
          <button className="border-2 bg-transparent text-blue-600 border-blue-600 rounded-md p-2 font-bold">Log In</button>
        </div>
        </div>
   
      {/* Second section */}

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
              <p className="font-sm">Don&apos;t be late again. Make sure you get notification 1 hour before the meeting start, to prepare well. </p>
            </li>
          </ul>
        </div>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white text-center rounded-md m-8'>
            <li>
              <Image src=""
                alt="second importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              /></li>
            <li className="p-4">
              <h1 className="font-bold text-xl trext-blue-900">Helping you keep time</h1>
            </li>
            <li className='p-4'>
              <p>Our system is designed in a way that your top and important schedules are announced too earlier to make sure you don&apos;t forget about them. </p>
            </li>
          </ul>
        </div>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white text-center rounded-md m-8'>
            <li>
              <Image src=""
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
    </main>
  )
}
