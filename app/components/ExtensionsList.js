import React from "react";
import ExtensionComponent from "./ExtensionComponent";
import data from "@/app/data.json";

const ExtensionsList = () => {
  return (
    <div>
      {data.map((item) => (
        <ExtensionComponent
          key={item}
          logo={item.logo}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ExtensionsList;
