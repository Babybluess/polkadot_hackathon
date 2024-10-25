import API, { ApiResponse } from "@/config/api.config";
import { Pair } from "@/types";

interface createNewPair {
  lend_token_symbol: string;
  collateral_token_symbol: string;
  lend_token: string;
  collateral_token: string;
  lend_icon: string;
  collateral_icon: string;
  lend_amount: number;
  lend_token_name: string;
  collateral_token_name: string;
}

class CreatePairService {
  createPool = async (data: createNewPair) => {
    return await API.PATCH<ApiResponse<Pair>>("/pair", data);
  };

  getPool = async (poolId: string) => {
    return await API.GET<ApiResponse<Pair>>(`/pair/${poolId}`);
  };

  getAllPool = async () => {
    return await API.GET<ApiResponse<Pair[]>>("/pairs");
  };

  updatePool = async (pairId: string, data: createNewPair) => {
    return await API.PATCH<ApiResponse<Pair>>("/pair", { pairId, data });
  };

  deletePool = async (pairId: string) => {
    return await API.DELETE<ApiResponse<Pair>>(`/pair/${pairId}`);
  };
}

const PairService = new CreatePairService();
export { PairService };