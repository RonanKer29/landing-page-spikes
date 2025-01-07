interface PriceCardProps {
  subscription: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean; // Nouvelle prop pour appliquer le style
}

const PriceCard: React.FC<PriceCardProps> = ({
  subscription,
  price,
  description,
  features,
  buttonText,
  highlighted = false, // Par défaut, pas de liseré
}) => {
  return (
    <div
      className={`max-w-[500px] h-full p-7 bg-gradient-to-br from-white to-[#f6f6f6] rounded-[20px] border-2 flex flex-col justify-between items-start gap-7 ${
        highlighted ? "border-orange " : "border-[#3d3d3d]/20"
      }`}
    >
      <h1 className="text-dark text-4xl font-bold font-manrope leading-normal">
        {subscription}
      </h1>
      <h1 className="text-dark text-4xl font-bold font-manrope leading-normal">
        {price}
      </h1>
      <p className="text-left text-lg">{description}</p>
      <div className="border w-full"></div>
      <ul className="list-disc pl-5 text-left">
        {features.map((feature) => (
          <li key={feature} className="font-manrope text-lg text-dark mb-3">
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full h-12 bg-orange text-white rounded-3xl font-manrope font-semibold text-lg">
        {buttonText}
      </button>
    </div>
  );
};

export default PriceCard;
