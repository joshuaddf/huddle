import Image from "next/image";
import sectionTop1 from "/public/images/bg-section-top-desktop-1.svg";
import convo from "/public/images/illustration-flowing-conversation.svg"
import sectionBot1 from "/public/images/bg-section-bottom-desktop-1.svg"
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const GridSection = () => {
  return (
    <div>
      <div className="mt-[5rem]">
        <div className="lg:flex">
          <div className="p-[3.7rem]">
            <Image src={convo} width={500} height={500} />
          </div>

          <div className="flex items-center justify-center lg:items-start flex-col w-[87vw] mx-auto text-center lg:pl-28 py-3 text-Very-Dark-Cyan lg:w-3/6 ">
            <h2
              className={`${poppins.className} py-3 lg:py-6 font-bold text-xl lg:text-4xl`}
            >
              Flowing Conversations
            </h2>
            <p
              className={`${openSans.className} text-sm font-semibold lg:text-left lg:w-[35rem] lg:text-lg lg:font-normal`}
            >
              You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
