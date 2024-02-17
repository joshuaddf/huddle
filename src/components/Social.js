import React from "react";
import socialLogo from "/public/images/screen-mockups.svg";
import Image from "next/image";
import communities from "/public/images/icon-communities.svg";
import messages from "/public/images/icon-messages.svg";

import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ 
    subsets: ['latin'],
    weight: ['400', '600', '700']
 })

const Social = () => {
  return (
    <div className="flex items-center flex-col mt-28">
      <Image className="mx-auto" src={socialLogo} width={1050} heigth={1050} />

      <div className={`${openSans.className} flex flex-col lg:flex-row mx-auto gap-[5rem] lg:gap-[20rem] text-Very-Dark-Cyan mt-28`}>
        <div>
          <div className="flex flex-col items-left ">
            <div className="hidden lg:block">
            <Image src={communities} width={50} height={50} />
            </div>
            <div className="block lg:hidden">
            <Image src={communities} width={35} height={35} />
            </div>
            <span className="lg:text-[6.5rem] text-6xl p-2 font-bold">1.4k+</span>
          </div>
          <p className="flex p-2 lg:p-0 items-center justify-center lg:text-2xl">Communities Formed</p>
        </div>

        <div>
          <div className="flex flex-col items-left">
            <div className="hidden lg:block">
            <Image src={messages} width={50} height={50} />
            </div>
            <div className="block lg:hidden">
            <Image src={messages} width={35} height={35} />
            </div>
            <span className="lg:text-[6.5rem] text-6xl p-2 font-bold">2.7m+</span>
          </div>
          <p className="flex p-2 lg:p-0 items-center justify-center lg:text-2xl">Messages Sent</p>
        </div>
      </div>
    </div>
  );
};

export default Social;
