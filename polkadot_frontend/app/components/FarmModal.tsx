import React, { useEffect, useMemo, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DialogPairStyle, DialogStyle } from "@/public/styles/styles";
import { Button, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import TokenMenu from "./farms/TokenMenu";
import { chainList } from "@/const";
import { useAccount, useChains, useWriteContract } from "wagmi";
import {
  health_ratio_thread,
  lendingTimeList,
  standard_uint,
} from "@/const/pool.const";
import { pool_abis } from "@/common/abi/pool_abi";
import InputCollateral from "./common/InputCollateral";
import { readContractTemplalte, writeAsyncContractTemplate } from "@/common/blockchain/ethereum/eth_template";
import { useStore } from "@/store/useStore";
import { Pair } from "@/types";
import PairCard from "./farms/PairCard";
import { token_abis } from "@/common/abi/token_abi";
import { PoolService } from "@/service";
import { sepolia } from "viem/chains";

function FarmModal({ isOpen, setOpen }: { isOpen: boolean; setOpen: any }) {
  const [name, setName] = useState<string>("");
  const [expire, setExpire] = useState<any>();
  const [interestRate, setInterestRate] = useState<string>("");
  const { address } = useAccount();
  const { pairList, network } = useStore();
  const [pairId, setPairId] = useState<string>("");
  const [collateralAmount, setCollateralAmount] = useState<number>(0);
  const [lendPrice, setLendPrice] = useState<number>(0);
  const [collateralPrice, setCollateralPrice] = useState<number>(0);
  const { writeContractAsync } = useWriteContract();
  const tokenInfo = [
    lendPrice * standard_uint,
    collateralPrice * standard_uint,
  ];

  const poolAddress = useMemo(() => {
    switch (network) {
      case "Ethereum":
        return process.env.NEXT_PUBLIC_EVM_SMART_CONTRACT;
      case "Moonbeam":
        return process.env.NEXT_PUBLIC_MOONBEAM_SMART_CONTRACT;
      default:
        return process.env.NEXT_PUBLIC_EVM_SMART_CONTRACT;
    }
  }, []);

  const handleCreateFarm = async () => {
    if (address && selectedPair !== undefined) {
      const lend_amount = selectedPair?.lend_amount * 10 ** standard_uint;
      const newPool = await writeContractAsync({
        abi: pool_abis,
        address: `0x${poolAddress}`,
        functionName: "createPool",
        args: [
          {
            pairId,
            name,
            collateral_amount: BigInt(collateralAmount * 10 ** standard_uint),
            expire: BigInt(expire.value),
            profit: BigInt(interestRate)
          },
          tokenInfo,
        ],
      });

      const approve = await writeContractAsync({
        abi: token_abis,
        address: `0x${selectedPair?.lend_token.substring(1)}`,
        functionName: "approve",
        args: [
          `0x${poolAddress}`,
          BigInt(lend_amount),
        ],
      });
    } else {
      alert("Please log in Metamask");
    }
  };

  const [selectedPair, setSelectedPair] = useState<Pair>();

  const handleSelectPair = (item: Pair, index: string) => {
    setSelectedPair(item);
    setPairId(index);
  };

  return (
    <Modal open={isOpen} onClose={setOpen}>
      {selectedPair ? (
        <Box sx={DialogStyle}>
          <div
            className="w-[30vw] flex justify-end cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#eba937", width: 25, height: 40 }}
            />
          </div>
          <div className=" h-[50%] flex justify-center items-center">
            <img src="../images/logo.png" alt="" />
          </div>
          <Box
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography id="modal-modal-description" sx={{ pb: 1, mr: 0.5 }}>
                Lend token
              </Typography>
              <TokenMenu
                selectedToken={selectedPair}
                tokenType="LendToken"
                price={lendPrice}
                setPrice={setLendPrice}
                labelToken={selectedPair.lend_token_name}
              />
            </Box>
            <Box>
              <Typography id="modal-modal-description" sx={{ pb: 1, mr: 0.5 }}>
                Collateral token
              </Typography>
              <TokenMenu
                selectedToken={selectedPair}
                tokenType="CollateralToken"
                price={collateralPrice}
                setPrice={setCollateralPrice}
                labelToken={selectedPair.collateral_token_name}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-description" sx={{ pb: 1, mr: 1 }}>
              Name
            </Typography>
            <TextField
              id="outlined-basic"
              label="Ex: Uniswap"
              variant="outlined"
              onChange={(item) => setName(item.target.value)}
              size="small"
              required
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-description" sx={{ pb: 1, mr: 0.5 }}>
              Lend amount
            </Typography>
            <Typography>{selectedPair.lend_amount}</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-description" sx={{ pb: 1, mr: 0.5 }}>
              Interest rate
            </Typography>
            <TextField
              id="outlined-basic"
              label="Min 10%"
              variant="outlined"
              onChange={(item) => setInterestRate(item.target.value)}
              size="small"
              required
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "10%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography id="modal-modal-description" sx={{ pb: 1, mr: 0.5 }}>
              Expire
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {lendingTimeList.map((item) => (
                <button
                  className={`py-2 px-3 border-[1px] rounded-xl border-gray-400 ${
                    item === expire ? "bg-green-400" : "bg-transparent"
                  }`}
                  onClick={() => setExpire(item)}
                >
                  {item.label}
                </button>
              ))}
            </Box>
          </Box>
          <InputCollateral
            tokenInfo={tokenInfo}
            lend_amount={selectedPair.lend_amount}
            setAmount={setCollateralAmount}
            interest_rate={health_ratio_thread}
          />
          <Button onClick={handleCreateFarm}>Create pool</Button>
        </Box>
      ) : (
        <Box sx={DialogPairStyle}>
          <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
            Select pair token
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "30%",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {pairList.map((item: Pair, index: number) => (
              <PairCard
                key={index}
                index={index.toString()}
                pair={item}
                handleSelectPair={handleSelectPair}
              />
            ))}
          </Box>
        </Box>
      )}
    </Modal>
  );
}

export default FarmModal;
