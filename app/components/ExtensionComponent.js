import React from "react";
import Image from "next/image";

const ExtensionComponent = ({ logo, name, description, isActive }) => {
  return (
    <div className="w-[100%] h-[200px] bg-white rounded-lg">
      <div>
        <div>
          <Image src={logo} alt="extention logo" width={30} height={30} />
        </div>
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>

      <div>
        <button>Remove</button>
        <button
          aria-checked={isActive}
          role="switch"
          className={`block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300`}
        ></button>
      </div>
    </div>
  );
};

export default ExtensionComponent;
