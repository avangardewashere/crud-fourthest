import connectMongoDb from "@/libs/mongodb";
import Record from "@/models/record";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { record, description } = await request.json();
  await connectMongoDb();
  await Record.create({ record, description });

  return NextResponse.json({
    message: "Record Submission Success",
    data: { record, description },
  });
}

export async function GET() {
  await connectMongoDb();
  const records = await Record.find();

  return NextResponse.json({ data: records });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Record.findByIdAndDelete(id);

  return NextResponse.json({ message: "Record has been deleted" });
}
