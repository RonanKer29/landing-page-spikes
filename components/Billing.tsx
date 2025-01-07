import { Switch } from "@/components/ui/switch";
import PriceCard from "./PriceCard";
import { billingFeatures } from "@/app/constants";

const Billing = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-20 text-center px-4 lg:px-0">
      {/* Section Switch */}
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-dark font-dmsans">
          Billed Monthly
        </h1>
        <Switch className="peer h-[30px] w-[60px] md:h-[40px] md:w-[84px] focus-visible:ring-orange data-[state=checked]:bg-orange data-[state=unchecked]:bg-gray-300" />
        <h1 className="font-manrope text-lg md:text-xl lg:text-2xl text-darkGray">
          Billed Yearly (save 15%)
        </h1>
      </div>
      {/* Section PriceCards */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        <PriceCard
          subscription={billingFeatures[0].subscription}
          price={billingFeatures[0].price}
          description={billingFeatures[0].description}
          features={billingFeatures[0].features}
          buttonText={"Try for Free"}
        />
        <PriceCard
          subscription={billingFeatures[1].subscription}
          price={billingFeatures[1].price}
          description={billingFeatures[1].description}
          features={billingFeatures[1].features}
          buttonText={"Subscribe Now"}
          highlighted={true}
        />
      </div>
    </div>
  );
};

export default Billing;
