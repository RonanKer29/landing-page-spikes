import Image from "next/image";
import features from "../public/features-card.svg";

const Productivity = () => {
  return (
    <div className="flex items-center justify-between gap-20 mx-auto mt-36 space-y-6 text-center max-w-[1400px]">
      <div className="flex flex-col space-y-6 max-w-[600px]">
        <h1 className="text-left font-dmsans text-5xl font-semibold text-dark">
          Know your productivity by squaree
        </h1>
        <p className="text-left font-manrope text-lg text-darkGray max-w-[500px] font-semibold">
          The expectation that productivity should always lead to tangible
          results or accomplishments.
        </p>
      </div>
      <div className="">
        <Image src={features} alt="features" />
      </div>
    </div>
  );
};

export default Productivity;
