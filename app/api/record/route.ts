import connectMongoDb from "@/libs/mongodb";
import Record from "@/models/record";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){

    const {record,description} = await request.json();
    await connectMongoDb();
    await Record.create({record,description});

    return NextResponse.json({message:"Record Submission Success",data:{record,description}})


}

export async function GET(request:NextRequest){

    // const {record,description} = await request.json();
    // const res = await connectMongoDb();
    // await Record.create({record,description});

    return NextResponse.json({message:"Hello"})


}