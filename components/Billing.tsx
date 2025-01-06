import { Switch } from "@/components/ui/switch";

const Billing = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-36 mb-36 text-center">
        <div className="flex flex-row items-center justify-center space-x-4">
          <h1 className="font-bold text-5xl text-dark font-dmsans">
            Billed Monthly
          </h1>
          <Switch className="peer focus-visible:ring-orange data-[state=checked]:bg-orange data-[state=unchecked]:bg-gray-300" />
          <h1 className="font-manrope text-xl text-center text-darkGray">
            Billed Yearly (save 15%)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Billing;
