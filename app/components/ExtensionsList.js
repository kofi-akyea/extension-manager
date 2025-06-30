"use client";

import { useState } from "react";
import ExtensionComponent from "./ExtensionComponent";
import data from "@/app/data.json";

const ExtensionsList = ({ filterStatus }) => {
  const [extensions, setExtensions] = useState(data);

  const handleToggle = (name) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension
      )
    );
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filterStatus === "All") {
      return true;
    } else if (filterStatus === "Active") {
      return ext.isActive === true;
    } else if (filterStatus === "Inactive") {
      return ext.isActive === false;
    }
    return false;
  });

  return (
    <div className="mt-10">
      {filteredExtensions.map((item) => (
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
