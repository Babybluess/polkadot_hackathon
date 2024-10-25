import React from "react";
import Table from "../common/Table";
import Pagination from "../common/Pagination";

function TransactionPage() {
  return (
    <div className="w-full h-full p-5 flex flex-col items-end gap-5">
      <div className="w-full h-[95%]">
        <Table />
      </div>
      <Pagination />
    </div>
  );
}

export default TransactionPage;
