"use client";

import { useState } from "react";
import ExtensionComponent from "./ExtensionComponent";
import data from "@/app/data.json";

const ExtensionsList = () => {
  const [extension, setExtensions] = useState(data);

  const handleToggle = (name) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  };

  return (
    <div className="mt-10">
      {data.map((item) => (
        <ExtensionComponent
          key={item.name}
          logo={item.logo}
          name={item.name}
          description={item.description}
          isActive={item.isActive}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default ExtensionsList;
