import connMongoDB from "@/connDB/mongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {nickName, pass} = await req.json();
    await connMongoDB();
    const user = await User.create({nickName, pass});
    console.log(user);
    return NextResponse.json({message: "Ok"}, {status: 200});
}