import React from 'react'
import Hero from "./Hero"
import ChefGrid from "./ChefGrid"
import Image from "next/image"

// Since the images are now in the public folder, we don't need to import them in this case.
// We can directly reference them using the `/` path.

const OurChefs = () => {
  return (
    <div>
      <Hero />
      <ChefGrid />

      <section className="bg-black md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          {/* Updated image paths to reference the public folder */}
          <Image src="/Chef Card 1.png" alt="Chef 1" className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer" width={305} height={280}/>
          <Image src="/Card 2.png" alt="Chef 2" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" width={280} height={280}/>
          <Image src="/Card 3.png" alt="Chef 3" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" width={280} height={280}/>
          <Image src="/Card 4.png" alt="Chef 4" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" width={280} height={280}/>
        </div>
      </section>
    </div>
  )
}

export default OurChefs;
