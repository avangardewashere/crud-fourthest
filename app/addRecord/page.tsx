"use client";
import React from "react";

export default function page() {
  const handleSubmit = () => {};
  return (
    <form className="border border-sky-400 bg-blue-100 flex flex-col  gap-6 px-8 py-8 mt-4 rounded-lg" onSubmit={handleSubmit}>
      {/* Record Tile */}
      <h2 className="text-lg font-semibold text-sky-600">Record Submission</h2>
      <input
        className="p-2 border border-sky-200 rounded-md bg-white-50 focus:bg-white outline-none focus:outline-none transition-all"
        placeholder="Enter Record Identifier"
        type="text"
      />

      <input
        className="p-2 border border-sky-200 rounded-md bg-white-50 focus:bg-white outline-none focus:outline-none transition-all"
        placeholder="Enter Record Description"
        type="text"
      />

      <button
        className=" text-sky-600  text-shadow-sm bg-gradient-to-r from-cyan-200 to-sky-300 rounded-md font-semibold text-sm p-2 w-fit"
        type="submit"
      >
        Add Record
      </button>
    </form>
  );
}
