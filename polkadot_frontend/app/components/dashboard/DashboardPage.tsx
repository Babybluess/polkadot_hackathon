import React from "react";
import Chart from "./LineChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { LatestTransactions } from "@/const/menu.const";
import Rewards from "../common/Rewards";
import { readContractTemplalte } from "@/common/blockchain/ethereum/eth_template";
import Pool from "./PoolList";

function DashboardPage() {
  const poolList = readContractTemplalte("listPools", []);
  return (
    <div className="w-full h-full p-5 flex flex-col gap-5">
      {/* firt session */}
      <div className="flex h-[50%] justify-between gap-5 w-full">
        <span className="text-green-500 text-xl font-semibold">
          My Borrowing Pool
        </span>
      </div>
      {/* second session */}
      <div className="w-full h-1/2 flex flex-col gap-5">
        {/* tittle */}
        <div className="w-full flex justify-between items-center">
          <span className="text-xl text-violet-500 font-semibold">
            My Lending Pool
          </span>
          <div className="h-0.5 bg-gray-500 w-[85%]"></div>
        </div>
        <div className="w-full h-full flex gap-5">
          {/* my farm */}
          <div className="w-[70%] flex flex-col gap-3">
            {poolList.data
              ? Object.keys(poolList.data).map((item: string) => (
                  <Pool pool={poolList.data} index={item} />
                ))
              : null}
          </div>
          {/* awards */}
          <div className="w-[30%] flex flex-col gap-3">
            <div className="h-[30%]">
              <Rewards />
            </div>
            <div className="h-[30%]">
              <Rewards />
            </div>
            <div className="h-[30%]">
              <Rewards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
