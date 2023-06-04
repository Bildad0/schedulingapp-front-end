"use client"
import Image from 'next/image'

const Features = () => {
    return(
        <div className="p-4" id="features">
            <h1 className='text-center font-bold text-blue-900 text-2xl p-5'>Why Us</h1>
            <div className="m-2 sm:m-2 md:m-4 lg:m-5 xl:m-5 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row md:place-content-center">
            <div className=''>
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
          <div className=''>
            <ul className='card shadow-xl bg-white text-center rounded-md m-8'>
              <li className="flex place-content-center">
                <Image src="https://st2.depositphotos.com/1552219/8982/i/450/depositphotos_89822064-stock-photo-clock-time-punctual.jpg"
                  alt="second importance image"
                  className='rounded-t-md'
                  width={200}
                  height={200}
                    />
                  </li>
              <li className="p-4">
                <h1 className="font-bold text-xl trext-blue-900">Helping you keep time</h1>
              </li>
              <li className='p-4'>
                <p>Our system is designed in a way that your top and important schedules are announced too early to make sure you don&apos;t forget about them. </p>
              </li>
            </ul>
          </div>
          <div className=''>
            <ul className='card shadow-xl bg-white text-center rounded-md m-8'>
              <li className="flex place-content-center">
                <Image src="https://static.vecteezy.com/system/resources/previews/004/264/987/original/the-best-memories-modern-calligraphy-inscription-wall-art-decor-design-wedding-photo-album-vector.jpg"
                  alt="third importance image"
                  className='rounded-t-md'
                  width={200}
                  height={200}
                    />
                  </li>
              <li className="p-4">
                <h1 className="font-bold text-xl trext-blue-900">Memories</h1>
              </li>
              <li className='p-4'>
                <p className="font-sm">Gives you alert on the most important previous events or Activities with your loved ones. </p>
              </li>
            </ul>
          </div>
            </div>
  
        </div>)
}

export default Features

