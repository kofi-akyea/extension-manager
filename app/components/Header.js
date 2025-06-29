"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { images } from "../helper";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <div className="bg-white h-auto p-3 rounded-xl">
        <div className="flex items-center justify-between">
          <Image src="./images/logo.svg" alt="logo" width={150} height={150} />
          <div className="bg-gray-300 p-2 rounded-lg" onClick={handleDarkMode}>
            <Image
              src={isDarkMode ? images.sun : images.moon}
              alt="moon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </>
  );
}
