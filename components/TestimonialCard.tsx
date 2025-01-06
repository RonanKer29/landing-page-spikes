interface TestimonialCardProps {
  title: string;
  description: string;
  avatar: string;
  name: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  description,
  avatar,
  name,
  position,
}) => {
  return (
    <div className="w-full h-full p-7 bg-gradient-to-br from-white to-[#f6f6f6] rounded-[20px] border border-[#3d3d3d]/20 flex flex-col justify-between items-start gap-7">
      <h3 className=" text-dark text-2xl font-bold font-manrope leading-normal">
        {title}
      </h3>
      <p className=" text-dark text-base font-medium font-manrope leading-normal">
        {description}
      </p>
      <div className="flex items-center gap-4 mt-1">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="text-dark text-base font-medium font-manrope leading-normal">
            {name}
          </p>
          <p className="opacity-70 text-dark text-sm font-medium font-manrope leading-none">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
