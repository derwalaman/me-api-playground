import mongoose from "mongoose";
import Profile from "../models/Profile.js";

await mongoose.connect("mongodb+srv://meme:Derwal102030@cluster0.armea3a.mongodb.net/?appName=Cluster0");

await Profile.create({
    name: "Abhishek",
    email: "aman@gmail.com",
    education: "B.Tech Computer Science",

    skills: ["JavaScript", "Next.js", "Node.js", "MongoDB", "Python"],

    projects: [
        {
            title: "CodeAxa",
            description: "LeetCode-style coding platform",
            links: ["https://github.com/yourrepo"],
        },
    ],

    work: ["Full Stack Developer Intern"],

    links: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourprofile",
        portfolio: "https://yourportfolio.com",
    },
});

console.log("Seeded successfully");
