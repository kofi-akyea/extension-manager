import Image from "next/image";

import Header from "./components/Header";
import ExtensionsList from "./components/ExtensionsList";

export default function Home() {
  return (
    <>
      <div className=" w-[100vw] h-auto p-5">
        <Header />
        <ExtensionsList />
      </div>
    </>
  );
}
