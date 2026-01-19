import { connectDB } from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET(req) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const skill = searchParams.get("skill")?.toLowerCase();

    const profile = await Profile.findOne();

    if (!skill) {
        return Response.json(profile.projects);
    }

    const projects = profile.projects.filter(project =>
        project.title.toLowerCase().includes(skill) ||
        project.description.toLowerCase().includes(skill) ||
        project.links.join(" ").toLowerCase().includes(skill)
    );

    return Response.json(projects);
}
