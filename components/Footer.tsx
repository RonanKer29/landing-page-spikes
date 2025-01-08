import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row w-full bg-footer py-12 px-6 lg:px-16 xl:px-24 gap-12 lg:gap-16">
      {/* Logo et description */}
      <div className="flex flex-col w-full lg:w-1/4">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/logo.svg" alt="Squaree logo" width={40} height={40} />
          <p className="text-dark font-dmsans text-lg font-bold leading-[22px] tracking-[-0.48px]">
            Squaree
          </p>
        </div>
        <p className="text-gray-600 text-sm lg:text-base leading-6">
          What matters is productivity with a fun culture.
        </p>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:w-2/4 gap-8">
        {/* Colonne 1 */}
        <div>
          <h2 className="text-dark font-bold text-lg mb-4">About</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Story
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 2 */}
        <div>
          <h2 className="text-dark font-bold text-lg mb-4">Company</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#" className="hover:underline">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                More
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Carte Twitter */}
      <div className="flex gap-8 justify-center my-auto items-start h-2/3 p-6 rounded-2xl border border-gray-300 bg-[#F6F8FF] shadow-md w-auto md:w-1/3">
        <div className="flex flex-col ">
          <h2 className="text-dark font-bold text-lg mb-2 md:text-sm">
            Follow us on Twitter
          </h2>
          <a
            href="https://notion.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkGray hover:underline text-sm lg:text-base md:text-xs"
          >
            notion.com
          </a>
        </div>
        <button className="flex my-auto px-6 py-3 text-white bg-orange rounded-2xl font-manrope font-semibold md:text-sm text-lg">
          Follow
        </button>
      </div>
    </footer>
  );
};

export default Footer;
