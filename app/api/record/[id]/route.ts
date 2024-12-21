import connectMongoDb from "@/libs/mongodb";
import Record from "@/models/record";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { newRecord: record, newDescription: description } =
    await request.json();
  await connectMongoDb();
  // find the id and update it with the submitted new data
  await Record.findByIdAndUpdate(id, { record, description });

  return NextResponse.json({ message: "The record has been updated" });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongoDb();
  const record = await Record.findOne({ _id: id });

  return NextResponse.json({ record  },{ status:200});
}
