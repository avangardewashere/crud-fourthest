"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { HiTrash } from "react-icons/hi2";

interface IRemoveButton {
  id: string;
}

export default function RemoveButton({ id }: IRemoveButton) {
  const router = useRouter();

  const handleRemove = async () => {
    const confirmation = confirm("Are you sure?");

    if (confirmation == true) {
      const res = await fetch("http://localhost:3000/api/record?id=" + id, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={handleRemove}>
      <HiTrash size={22} />
    </button>
  );
}
