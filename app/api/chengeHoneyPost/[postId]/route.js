import connMongoDB from "@/connDB/mongoDB";
import PostHoney from "@/models/PostHoney";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    const { postId } = params;
    const {newMill: mill, newGrn: grn} = await req.json();
    console.log(postId);
    const post = await PostHoney.findByIdAndUpdate(postId, {mill, grn});
    console.log(post)
    return NextResponse.json({message: "Data updated"}, {status: 200});
}

export async function GET(req, { params }) {
    const { postId } = params;
    await connMongoDB();
    const post = await PostHoney.findById({_id: postId});
    return NextResponse.json({post}, {status: 200});
}

