import { Pool } from "@/types";
import { ImmerStateCreator } from "./useStore";
import { PoolService } from "@/service";

export type PriceToken = {
  token: string;
  price: number;
};

export interface PoolSlice {
  poolList: Pool[];
  priceList: PriceToken[];
  fetchPool: () => Promise<void>;
  addPrice: (token: string, price: number) => void;
};

export const createPoolSlice: ImmerStateCreator<PoolSlice> = (set) => ({
  poolList: [],
  priceList: [],

  fetchPool: async () => {
    const res = await PoolService.getAllPool();
    if (res.success) {
      set((state) => {
        state.poolList = res.metadata;
      });
    } else {
      set((state) => {
        state.poolList = [];
      });
    }
  },

  addPrice: (_token: string, _price: number) => {
    set((state) => {
      state.priceList.map((item: PriceToken) => {
        if (item.token === _token) {
          item.price = _price;
        }
      })
    });
  },
});
