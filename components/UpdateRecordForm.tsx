"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IUpdateRecordForm {
  id: string;
  record: string;
  description: string;
}

export default function UpdateRecordForm({
  id,
  record,
  description,
}: IUpdateRecordForm) {
  const [newRecord, setNewRecord] = useState(record);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter()
  console.log(record)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/record/"+id, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newRecord, newDescription }),
      });


      if(!res.ok){
        throw new Error("Failed to update record")
      }

      router.push("/")


    } catch (error) {
      console.log("Encounter an error: ", error);
    }
  };
  return (
    <form
      className="border border-green-400 bg-slate-50 flex flex-col  gap-6 px-8 py-8 mt-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      {/* Record Title */}
      <h2 className="text-lg font-semibold text-green-600">
        Record Update Form Submission
      </h2>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewRecord(e.target.value)
        }
        value={newRecord}
        className="p-2 border border-green-200 rounded-md bg-white-50 focus:bg-white outline-none focus:outline-none transition-all"
        placeholder="Update the Record Identifier"
        type="text"
      />

      {/* Record Description */}
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewDescription(e.target.value)
        }
        value={newDescription}
        className="p-2 border border-green-200 rounded-md bg-white-50 focus:bg-white outline-none focus:outline-none transition-all"
        placeholder="Update the Record Description"
        type="text"
      />

      <button
        className=" text-green-600  text-shadow-sm bg-gradient-to-r from-cyan-200 to-green-300 rounded-md font-semibold text-sm p-2 w-fit"
        type="submit"
      >
        Update Record
      </button>
    </form>
  );
}
