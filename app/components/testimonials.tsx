"use client"
import { ThemeProvider } from "@material-tailwind/react";
import {Carousel} from "@material-tailwind/react";


const Testimonials = () => {
    return (
    <ThemeProvider>
        <div className="m-3 border-2 border-slate-500 rounded-md bg-white hidden">
        <Carousel className="h-80 w-full">
      <div className="flex p-8 flex-row gap-2 place-content-between">
       {/* <Image src="" alt="first user" width={100} height={200} /> */}
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
    </ThemeProvider>
    )
}

export default Testimonials