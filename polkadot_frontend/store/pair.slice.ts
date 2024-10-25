import { Pair, Pool } from "@/types";
import { ImmerStateCreator } from "./useStore";
import { PairService, PoolService } from "@/service";

export interface PairSlice {
  pairList: Pair[];
  fetchPair: () => Promise<void>
};

export const createPairSlice: ImmerStateCreator<PairSlice> = (set) => ({
  pairList: [],

  fetchPair: async () => {
    const res = await PairService.getAllPool();
    
    if (res.success) {
      set((state) => {
        state.pairList = res.metadata;
      });
    } else {
      set((state) => {
        state.pairList = [];
      });
    }
  },
});
