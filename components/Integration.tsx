import IntegrationBox from "./IntegrationBox";
import evernote from "../public/integration/evernote.svg";
import figma from "../public/integration/figma.svg";
import slack from "../public/integration/slack.svg";
import zapier from "../public/integration/zapier.svg";
import notion from "../public/integration/notion.svg";

const Integration = () => {
  const integrationsRow1 = [
    { src: notion, alt: "Notion" },
    { src: slack, alt: "Slack" },
    { src: zapier, alt: "Zapier" },
    { src: evernote, alt: "Evernote" },
    { src: figma, alt: "Figma" },
  ];

  const integrationsRow2 = [
    { src: evernote, alt: "Evernote" },
    { src: figma, alt: "Figma" },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full lg:w-[1500px] mx-auto mt-24 mb-24 px-4 lg:px-0 space-y-12 lg:space-y-0">
      {/* Left Section: Two rows of SVGs */}
      <div className="flex flex-col space-y-8 lg:space-y-4">
        <div className="grid grid-cols-5 md:grid-cols-5 lg:flex lg:space-x-8 gap-4 lg:gap-0">
          {integrationsRow1.map((integration, index) => (
            <IntegrationBox
              key={index}
              src={integration.src}
              alt={integration.alt}
            />
          ))}
        </div>

        <div className="hidden grid grid-cols-2 md:grid-cols-3 lg:flex lg:space-x-8 gap-4 lg:gap-0">
          {integrationsRow2.map((integration, index) => (
            <IntegrationBox
              key={index}
              src={integration.src}
              alt={integration.alt}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Title and Description */}
      <div className="flex flex-col space-y-6 text-center lg:text-left">
        <h1 className="font-bold font-dmsans text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
          Seamless <br />
          integration <br />
          with best apps
        </h1>
        <p className="font-manrope text-base md:text-lg text-darkGray font-semibold">
          What ever you use, we integrate with the best of best
        </p>
      </div>
    </div>
  );
};

export default Integration;
