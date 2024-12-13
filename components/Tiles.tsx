import Image from "next/image";
import profileTile from "../public/hero/Tile1.svg";
import agendaTile from "../public/hero/Tile2.svg";
import notionTile from "../public/hero/Tile3.svg";
import productTile from "../public/hero/Tile4.svg";
import spendingTile from "../public/hero/Tile5.svg";

const Tiles = () => {
  return (
    <div className="relative mx-auto mt-16 grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 max-w-[1400px]">
      {/* Profile Tile */}
      <div className="row-span-2 sm:col-span-6 md:col-span-3 lg:col-span-3">
        <Image
          src={profileTile}
          alt="Profile"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>

      {/* Agenda Tile */}
      <div className="row-span-2 mt-24 sm:col-span-6 md:col-span-5 lg:col-span-3">
        <Image
          src={agendaTile}
          alt="Agenda"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>

      {/* Notion Tile */}
      <div className="row-span-1 sm:col-span-6 md:col-span-3 lg:col-span-3">
        <Image
          src={notionTile}
          alt="Notion"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>

      {/* Product Tile */}
      <div className="row-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <Image
          src={spendingTile}
          alt="Product"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>

      {/* Spending Tile */}
      <div className="row-span-1 sm:col-span-6 md:col-span-4 lg:col-span-3">
        <Image
          src={productTile}
          alt="Spending"
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Tiles;
