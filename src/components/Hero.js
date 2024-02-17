import Link from 'next/link'

import { Poppins } from 'next/font/google';
const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '700'
 })

 import { Open_Sans } from 'next/font/google';
 const openSans = Open_Sans({ 
    subsets: ['latin'],
    weight: ['400', '600', '700']
  })

const Hero = () => {
  return (
    <div className=' text-center'>
        <h1 className={`${poppins.className} lg:text-5xl pt-20 text-[1.7rem] lg:pt-40 text-Very-Dark-Cyan`}>Build The Community Your Fans Will Love</h1>  
        <p className={`${openSans.className} lg:w-3/6 mx-auto lg:py-10 py-6 text-[1rem] font-semibold lg:font-normal lg:leading-8 lg:text-xl text-Very-Dark-Cyan`}>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create create connections with your users as you engage in a genuine discussion.</p>      

        <button className={`${openSans.className} font-bold bg-Pink rounded-full lg:py-6 py-3 text-Very-Pale-Blue shadow-xl w-[14rem] lg:w-[22rem] mt-5 text-sm lg:text-lg hover:bg-Light-Pink`}><Link href={"/free"}>Get Started For Free</Link></button>
    </div>
  )
}

export default Hero