import { useReadContract, useWriteContract } from "wagmi";
import { pool_abis } from "@/common/abi/pool_abi";

export function readContractTemplalte(name: string, args: any[], chainId: number) {
  const data = useReadContract({
    chainId: chainId,
    address: `0x${process.env.NEXT_PUBLIC_EVM_SMART_CONTRACT}`,
    functionName: name,
    abi: pool_abis,
    args,
  });

  return data;
}

export function writeAsyncContractTemplate(
  address: string,
  name: string,
  abi: any,
  args: any[]
) {
  const { writeContractAsync } = useWriteContract();
  const execute = writeContractAsync({
    address: `0x${address}`,
    functionName: name,
    abi,
    args,
  });

  return execute;
}
