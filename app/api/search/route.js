import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET(req) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    const profile = await Profile.findOne();

    const result = {
        skills: profile.skills.filter(s =>
            s.toLowerCase().includes(q.toLowerCase())
        ),
        projects: profile.projects.filter(p =>
            p.title.toLowerCase().includes(q.toLowerCase())
        ),
    };

    return Response.json(result);
}
