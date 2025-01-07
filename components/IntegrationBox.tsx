import Image from "next/image";

interface IntegrationBoxProps {
  src: string;
  alt: string;
}

const IntegrationBox = ({ src, alt }: IntegrationBoxProps) => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-gray-300 rounded-3xl flex items-center justify-center shadow-sm">
      <Image
        src={src}
        alt={alt}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
      />
    </div>
  );
};

export default IntegrationBox;
