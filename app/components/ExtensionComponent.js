import React from "react";
import Image from "next/image";

const ExtensionComponent = ({
  logo,
  name,
  description,
  isActive,
  onToggle,
}) => {
  return (
    <div className="w-[100%] h-[200px] bg-white rounded-lg p-5 mt-5 shadow-lg flex flex-col justify-between">
      <div className="flex">
        <div className="w-[25%]">
          <Image src={logo} alt="extention logo" width={60} height={60} />
        </div>
        <div className="w-[65%]">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button>Remove</button>
        <button
          aria-checked={isActive}
          role="switch"
          onClick={() => onToggle(name)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
            isActive ? "bg-blue-600" : "bg-gray-200"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              isActive ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ExtensionComponent;
