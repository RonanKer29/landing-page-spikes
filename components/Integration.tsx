import IntegrationBox from "./IntegrationBox";
import evernote from "../public/integration/evernote.svg";
import figma from "../public/integration/figma.svg";
import slack from "../public/integration/slack.svg";
import zapier from "../public/integration/zapier.svg";
import notion from "../public/integration/notion.svg";

const Integration = () => {
  const integrations = [
    { src: evernote, alt: "Evernote" },
    { src: figma, alt: "figma" },
    { src: slack, alt: "slack" },
    { src: zapier, alt: "zapier" },
    { src: notion, alt: "Notion" },
  ];

  return (
    <div className="flex mt-36 mb-36 w-[1400px] mx-auto gap-12">
      <div className="flex space-x-12  ">
        {integrations.map((integration, index) => (
          <IntegrationBox
            key={index}
            src={integration.src}
            alt={integration.alt}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="font-bold font-dmsans text-5xl text-dark">
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
