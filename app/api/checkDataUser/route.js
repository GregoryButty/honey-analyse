import connMongoDB from "@/connDB/mongoDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {nickName, pass} = await req.json();
        await connMongoDB();
        const user = await User.find({nickName, pass});

        if (user[0].nickName == nickName && user[0].pass == pass){
            console.log(user);
            return NextResponse.json(
                {data: {message: "User foud", user: {userName: nickName, userId: user[0]._id}}},
                {status: 200});
        } else {
            return NextResponse.json(
                {message: "User not found"},
                {status: 400});
        }
    } catch (error) {
        console.log(error);
    }
}