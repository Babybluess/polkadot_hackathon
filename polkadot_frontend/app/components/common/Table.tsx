import { body, header } from "@/const";
import { useStore } from "@/store/useStore";
import { Pool } from "@/types";
import React from "react";

function Table() {
  const { poolList } = useStore();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((item) => (
              <th scope="col" className="px-6 py-3">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {poolList.map((item: Pool) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4">{item.creator}</td>
              <td className="px-6 py-4">{item.collateral_amount}</td>
              <td className="px-6 py-4">{item.profit}</td>
              <td className="px-6 py-4">{item.expire}</td>
              <td className="px-6 py-4">
                <button className="py-[2px] px-1 bg-gradient-to-b from-[#F9D660] to-[#ECAD4B] font-semibold rounded-md shadow-inner shadow-white">
                  Earn
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
