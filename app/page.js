"use client";
import { useState } from "react";
import Header from "./components/Header";
import ExtensionsList from "./components/ExtensionsList";
import Filter from "./components/Filter";

export default function Home() {
  const [filterStatus, setFilterStatus] = useState("All");
  return (
    <>
      <div className=" w-[100vw] h-auto p-5">
        <Header />
        <Filter filterStatus={filterStatus} onFilterChange={setFilterStatus} />
        <ExtensionsList filterStatus={filterStatus} />
      </div>
    </>
  );
}
