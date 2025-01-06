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
    <div className="flex flex-col justify-between items-start border bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold font-manrope text-dark">{title}</h3>
      <p className="text-sm text-darkGray font-manrope mt-2">{description}</p>
      <div className="flex items-center gap-4 mt-6">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="font-semibold text-dark">{name}</p>
          <p className="text-sm text-darkGray">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
