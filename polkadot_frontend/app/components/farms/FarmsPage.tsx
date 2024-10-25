import React, { useMemo, useState } from "react";
import { farmList } from "@/const/menu.const";
import Pagination from "../common/Pagination";
import DetailFarm from "./DetailFarm";
import { add } from "@/utils/math.utils";
import { readContractTemplalte } from "@/common/blockchain/ethereum/eth_template";
import PairCard from "./PairCard";

function FarmsPage() {
  const [selectedCard, setSeletedCard] = useState<any>(null);
  const [lendToken, setLendToken] = useState<any>(null);
  const [collateralToken, setCollateralToken] = useState<any>(null);
  const [tokenPrice, setTokenPrice] = useState([])
  // const poolList = readContractTemplalte("listPools", []);

  const total_APY = add(farmList);
  return (
    <div className="w-full h-full px-5 pt-5 py-2 flex flex-col justify-between">
      {selectedCard ? (
        <DetailFarm
          pool={selectedCard}
          setSelectedFarm={setSeletedCard}
          totalDeposits={total_APY}
          lendToken={lendToken}
          collateralToken={collateralToken}
        />
      ) : (
        <React.Fragment>
          <div className="w-full h-[50%] grid grid-cols-6 gap-3">
            {/* {poolList.data
              ? Object.keys(poolList.data).map((item: any) => (
                  <PairCard
                    pool={poolList.data}
                    index={item}
                    key={item}
                    setSeletedCard={setSeletedCard}
                    setLendToken={setLendToken}
                    setCollateralToken={setCollateralToken}
                    setTokenPrice={setTokenPrice}
                  />
                ))
              : null} */}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default FarmsPage;
