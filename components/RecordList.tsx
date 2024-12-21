import React from "react";
import RemoveButton from "./RemoveButton";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

interface IRecordItem {
  _id: string;
  record: string;
  description: string;
}

const getRecord = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/record", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }

    return res.json();
  } catch (error) {
    console.log("Encountered an error: ", error);
  }
};
export default async function RecordList() {
  const { data:recordList} = await getRecord();

  return (
    <>
      {recordList?.map((recordItem: IRecordItem) => (
        <div className="flex shadow-sm justify-between p-6 py-4 bg-slate-50 border-opacity-75 border-sky-300 border rounded-md my-2 hover:bg-white">
          <div>
            <h2 className="text-2xl font-semibold text-sky-800">{recordItem.record ?? "Record Idenitifier"}</h2>
            <div>{recordItem.description ?? "Record Description"}</div>
          </div>

          <div className="flex gap-2 items-center">
            <RemoveButton id={recordItem._id} />
            <Link
              className="text-green-400"
              href={"/updateRecord/" + recordItem._id}
            >
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
