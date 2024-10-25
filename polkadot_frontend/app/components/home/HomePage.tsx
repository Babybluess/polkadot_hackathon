"use client";
import { topFarmList } from "@/const/menu.const";
import { FarmsList } from "@/types";
import React, { useState } from "react";
import Table from "../common/Table";
import Card from "../common/Card";

function HomePage() {
  // const poolList = readContractTemplalte("listPools", []);
  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      <span className="text-3xl font-bold">Good to see you, farmer!</span>
      <div className="w-full h-[50%] grid grid-cols-4 gap-3">
        {topFarmList.map((item: FarmsList) => (
          <Card item={item} />
        ))}
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <span className="text-gray-400">Recommended</span>
          <button className="p-3 bg-white rounded-xl shadow-sm shadow-black">
            See more farms
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default HomePage;
