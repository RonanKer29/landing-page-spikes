import Image from "next/image";

interface IntegrationBoxProps {
  src: string;
  alt: string;
}

const IntegrationBox = ({ src, alt }: IntegrationBoxProps) => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="bg-white p-8 w-32 h-32 border border-gray-300 rounded-3xl flex items-center justify-center">
          <Image src={src} alt={alt} className="" />
        </div>
        <div className="bg-white p-8 w-32 h-32 border border-gray-300 rounded-3xl flex items-center justify-center">
          <Image src={src} alt={alt} className="" />
        </div>
      </div>
    </>
  );
};

export default IntegrationBox;
