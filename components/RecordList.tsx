import React from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

export default function RecordList() {
  return (
    <div className="flex shadow-sm justify-between p-6 py-4 bg-slate-50 border-opacity-75 border-sky-300 border rounded-md my-2 hover:bg-white">
      <div>
        <h2>Unit Records</h2>
        <div>Record Description</div>
      </div>

      <div className="flex gap-2 items-center">
        <RemoveButton />
        <Link className="text-green-400" href={"/updateRecord/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
