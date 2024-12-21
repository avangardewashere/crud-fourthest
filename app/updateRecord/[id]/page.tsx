"use client";
import React from "react";

export default function AddRecordPage() {
  const handleSubmit = () => {};
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
        className="p-2 border border-green-200 rounded-md bg-white-50 focus:bg-white outline-none focus:outline-none transition-all"
        placeholder="Update the Record Identifier"
        type="text"
      />

      {/* Record Description */}
      <input
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
