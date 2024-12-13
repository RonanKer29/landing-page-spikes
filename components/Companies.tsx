import Image from "next/image";
import fluid from "../public/featured/Fluid.svg";
import hikkeno from "../public/featured/Hikkeno.svg";
import bubble from "../public/featured/Bubble.svg";
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className="relative flex flex-col items-center mx-auto max-w-[800px]">
      <h1 className="text-xl text-center font-dm-sans text-dark/50 font-medium leading-[46px]">
        We have the fast-paced growing companies with us
      </h1>
      <div className="relative w-full overflow-hidden mt-9">
        {/* Left Blur */}
        <div className="absolute top-0 left-0 z-10 w-12 h-full pointer-events-none bg-gradient-to-r from-white to-transparent" />

        {/* Right Blur */}
        <div className="absolute top-0 right-0 z-10 w-12 h-full pointer-events-none bg-gradient-to-l from-white to-transparent" />

        <Marquee speed={50} pauseOnHover={true}>
          <div className="flex items-center justify-center mx-10">
            <Image
              src={fluid}
              alt="fluid"
              className="w-[150px] h-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center mx-10">
            <Image
              src={hikkeno}
              alt="hikkeno"
              className="w-[150px] h-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center mx-10">
            <Image
              src={bubble}
              alt="bubble"
              className="w-[150px] h-auto object-contain"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Companies;
