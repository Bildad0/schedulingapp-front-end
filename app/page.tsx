import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-fit">

      {/* first section */}
      <div className=' bg-black text-white'>
        <div className='flex flex-row justify-between p-5 '>
          <h1 className='font-bold text-2xl text-blue-900'>
           Logo</h1>
          <div className='hidden sm:hidden md:flex lg:flex xl:flex'>
            <ul className='flex flex-row gap-5'>
              <li>FEATURES</li>
              <li>BLOG</li>
              <li>CREATE ACCOUNT</li>
              <li>LOGIN </li>
            </ul>
          </div>
        </div>
        <h2 className='text-center p-3 text-xl font-thin'>Simple scheduling</h2>
        
        <h2 className='text-blue-500 font-bold text-lg font-serif text-center p-6 '>SCHEDULE APPOINTMENT</h2>
        <p className="p-6 font-bold text-3xl text-center">What&apos;s your main value preposition?</p>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-5 p-8">
          <button className='border-2 bg-blue-600 border-blue-600 text-white p-2 font-bold'>Get Startded</button>
          <button className="border-2 bg-transparent text-blue-600 border-blue-600 p-2 font-bold">Log In</button>
        </div>
        </div>
   
      {/* Second section */}

      <div className="p-4">
        <h1 className='text-center font-bold text-blue-900 text-2xl p-5'>Features</h1>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white rounded-md m-8'>
            <li>
              <Image src=""
                alt="first importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              /></li>
            <li className="p-4">
              <h1 className="font-md text-xl trext-blue-900">Keeping track of your meetings and events</h1>
            </li>
            <li className='p-4'>
              <p className="font-sm">Don&apos;t be late again. Make sure you get notification 1 hour before the meeting start, to prepare well. </p>
            </li>
          </ul>
        </div>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white rounded-md m-8'>
            <li>
              <Image src=""
                alt="first importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              /></li>
            <li className="p-4">
              <h1 className="font-bold text-xl trext-blue-900">Keeping track of your meetings and events</h1>
            </li>
            <li className='p-4'>
              <p>Don&apos;t be late again. Make sure you get notification 1 hour before the meeting start, to prepare well. </p>
            </li>
          </ul>
        </div>
        <div className='m-3'>
          <ul className='card shadow-xl bg-white rounded-md m-8'>
            <li>
              <Image src=""
                alt="first importance image"
                className='rounded-t-md'
                width={200}
                height={200}
              /></li>
            <li className="p-4">
              <h1 className="font-bold text-xl trext-blue-900">Keeping track of your meetings and events</h1>
            </li>
            <li className='p-4'>
              <p clasName="p-2 font-sm text-sm">Don&apos;t be late again. Make sure you get notification 1 hour before the meeting start, to prepare well. </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
