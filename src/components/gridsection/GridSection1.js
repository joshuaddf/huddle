import Image from "next/image";
import sectionTop1 from "/public/images/bg-section-top-desktop-1.svg";
import grow from "/public/images/illustration-grow-together.svg";
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
        <Image className="" src={sectionTop1} width={3000} height={1000} />

        <div className="bg-Very-Pale-Blue lg:flex">
          <div className="p-[3.7rem]">
            <Image src={grow} width={500} height={500} />
          </div>

          <div className="flex items-center justify-center lg:items-start flex-col w-[87vw] mx-auto text-center lg:pl-28 py-3 text-Very-Dark-Cyan lg:w-3/6 lg:order-first">
            <h2
              className={`${poppins.className} py-3 lg:py-6 font-bold text-xl lg:text-4xl`}
            >
              Grow Together
            </h2>
            <p
              className={`${openSans.className} text-sm font-semibold lg:text-left lg:w-[35rem] lg:text-lg lg:font-normal`}
            >
              Generate meaningful discussions with your audience and build a
              strong,loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
      </div>
      <Image className="" src={sectionBot1} width={3000} height={1000} />
    </div>
  );
};

export default GridSection;
