import connMongoDB from "@/connDB/mongoDB";
import PostHoney from "@/models/PostHoney";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {mill, grn, userId} = await req.json();
        // console.log(mill, grn, userId);
        await connMongoDB();
        const post = await PostHoney.create({mill, grn, user:{userId}});
        // console.log(post);
        return NextResponse.json({message: "saccses"}, {status: 201})
    } catch (error) {
        console.log(error)
    }

}