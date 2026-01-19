import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET() {
    await connectDB();
    const profile = await Profile.findOne();
    return Response.json(profile);
}

export async function POST(req) {
    await connectDB();
    const body = await req.json();
    const profile = await Profile.create(body);
    return Response.json(profile);
}

export async function PUT(req) {
    await connectDB();
    const body = await req.json();
    const updated = await Profile.findOneAndUpdate({}, body, { new: true });
    return Response.json(updated);
}
