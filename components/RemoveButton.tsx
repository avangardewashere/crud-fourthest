"use client";
import React from "react";
import { HiTrash } from "react-icons/hi2";

export default function RemoveButton() {
  const handleRemove = () => {
    alert("about to remove");
  };
  return (
    <button onClick={handleRemove}>
      <HiTrash size={22} />
    </button>
  );
}
