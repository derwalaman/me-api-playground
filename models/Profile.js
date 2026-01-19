import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    links: [String],
});

const ProfileSchema = new mongoose.Schema({
    name: String,
    email: String,
    education: String,

    skills: [String],

    projects: [ProjectSchema],

    work: [String],

    links: {
        github: String,
        linkedin: String,
        portfolio: String,
    },
});

export default mongoose.models.Profile ||
    mongoose.model("Profile", ProfileSchema);



    