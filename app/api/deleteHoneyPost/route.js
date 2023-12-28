import connMongoDB from "@/connDB/mongoDB";
import PostHoney from "@/models/PostHoney";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    await connMongoDB();
    await PostHoney.findByIdAndDelete(id);
    return NextResponse.json({message: "Post deleted"}, {status: 200});
}