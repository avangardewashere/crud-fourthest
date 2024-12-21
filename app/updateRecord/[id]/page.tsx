import UpdateRecordForm from "@/components/UpdateRecordForm";
import React from "react";

const GetRecordById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/record/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to Fetch the record");
    }

    return res.json();
  } catch (error) {
    console.log("Encounter an error: ", error);
  }
};

export default async function UpdateRecordPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const data = await GetRecordById(id);
  console.log("id", id ,data, );
 const { record: title, description } = data.record;
 console.log(" title : ",title);
  return <UpdateRecordForm record={title} description={description} id={id} />;
}
