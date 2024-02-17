import Link from 'next/link';

import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

import { Poppins } from 'next/font/google';
const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '700'
 })

const Build = () => {
  return (
    <div className='mt-6'>
        <div className='text-center'>
            <h2 className={`${poppins.className} lg:text-4xl text-2xl font-[700] pb-4 pt-20 text-[1.7rem] lg:pt-40 text-Very-Dark-Cyan`}>Ready To Build Your Community?</h2>
            <button className={`${openSans.className} font-bold bg-Pink rounded-full lg:py-6 py-3 text-Very-Pale-Blue shadow-xl w-[14rem] lg:w-[22rem] mt-5 text-sm lg:text-lg hover:bg-Light-Pink`}><Link href={"/free"}>Get Started For Free</Link></button>
        </div>
    </div>
  )
}

export default Build