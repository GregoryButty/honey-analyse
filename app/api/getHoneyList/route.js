import connMongoDB from "@/connDB/mongoDB";
import PostHoney from "@/models/PostHoney";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connMongoDB();
        const posts = await PostHoney.find();
        return NextResponse.json({ posts }, {status: 200});
    } catch (error) {
        console.log(error);
    }
}