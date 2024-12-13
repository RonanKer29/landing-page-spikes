import Image from "next/image";
import fluid from "../public/featured/Fluid.svg";
import hikkeno from "../public/featured/Hikkeno.svg";
import bubble from "../public/featured/Bubble.svg";

const Companies = () => {
  return (
    <div className="items-center mx-auto">
      <h1 className=" text-xl text-center font-dmsans text-dark/50 font-medium leading-[46px]">
        We have the fast paced growing companies with us
      </h1>
      <div className="flex justify-between mx-auto mt-9 max-w-[1000px]">
        <Image src={fluid} alt="fluid" />
        <Image src={hikkeno} alt="hikkeno" />
        <Image src={bubble} alt="bubble" />
      </div>
    </div>
  );
};

export default Companies;
