import Image from "next/image";
import React from "react";
import graph from "../public/graph.svg";

const Growth = () => {
  const statistics = [
    { percentage: "200 %", description: "Increase in new pipeline generated" },
    { percentage: "70 %", description: "Increase in form workforce" },
    { percentage: "40 %", description: "Decrease in cost per lead" },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-36 space-y-6 text-center">
      <h1 className="text-5xl font-bold leading-tight text-dark font-dmsans w-[1200px]">
        Turn your growth into Squaree
      </h1>
      <h2 className="text-lg text-darkGray w-[900px] text-center font-manrope font-medium leading-[1.65]">
        The expectation that productivity should always lead to tangible results
        or accomplishments & notion that certain types of work or activities are
        more valuable or productive than others.
      </h2>
      <Image src={graph} alt="graph" width={374} height={157} />
      <div className="flex w-[1200px] justify-between">
        {statistics.map((statistic, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 max-w-[200px]"
          >
            <h1 className="text-6xl font-bold text-dark">
              {statistic.percentage}
            </h1>
            <p className="text-darkGray font-dmsans text-base text-center">
              {statistic.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Growth;
