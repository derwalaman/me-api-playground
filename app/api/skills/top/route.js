import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET() {
    await connectDB();
    const profile = await Profile.findOne();

    return Response.json(profile.skills.slice(0, 5));
}
