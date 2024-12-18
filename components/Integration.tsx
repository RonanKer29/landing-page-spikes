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
    <div className="flex items-center justify-between w-[1500px] mx-auto mt-24 mb-24">
      {/* Left Section: Two rows of SVGs */}

      <div className="flex flex-col ">
        <div className="flex space-x-8">
          {integrationsRow1.map((integration, index) => (
            <IntegrationBox
              key={index}
              src={integration.src}
              alt={integration.alt}
            />
          ))}
        </div>

        <div className="flex space-x-8">
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
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold font-dmsans text-5xl text-dark leading-tight">
          Seamless <br />
          integration <br />
          with best apps
        </h1>
        <p className="font-manrope text-lg text-darkGray font-semibold">
          What ever you use, we integrate with the best of best
        </p>
      </div>
    </div>
  );
};

export default Integration;
