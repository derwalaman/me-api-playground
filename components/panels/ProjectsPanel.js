"use client";

import { useState } from "react";

export default function ProjectsPanel() {
    const [skill, setSkill] = useState("");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const loadProjects = async () => {
        if (!skill.trim()) {
            alert("Please enter a skill");
            return;
        }

        setLoading(true);
        setLoaded(false);

        try {
            const res = await fetch(`/api/projects?skill=${skill}`);
            const data = await res.json();

            setProjects(data);
            setLoaded(true);
        } catch (err) {
            alert("Failed to load projects");
        }

        setLoading(false);
    };

    return (
        <div className="space-y-6">

            {/* Header */}
            <h2 className="text-2xl font-bold flex items-center gap-2">
                📁 Projects
            </h2>

            {/* Search */}
            <div className="flex gap-4">
                <input
                    className="border border-slate-300 px-4 py-2 rounded-lg w-72"
                    placeholder="Filter by skill (e.g. javascript)"
                    value={skill}
                    onChange={e => setSkill(e.target.value)}
                />

                <button
                    onClick={loadProjects}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
                >
                    {loading ? "Loading..." : "Load"}
                </button>
            </div>

            {/* Result */}
            <div className="grid md:grid-cols-2 gap-6 mt-4">

                {/* Loading */}
                {loading && (
                    <p className="text-slate-500">
                        Loading projects...
                    </p>
                )}

                {/* No result */}
                {loaded && projects.length === 0 && (
                    <p className="text-slate-500">
                        No projects found for "{skill}"
                    </p>
                )}

                {/* Projects */}
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:shadow transition"
                    >
                        <h3 className="text-lg font-semibold mb-2">
                            {project.title}
                        </h3>

                        <p className="text-slate-600 mb-3">
                            {project.description}
                        </p>

                        {project.links?.length > 0 && (
                            <div className="space-y-1">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link}
                                        target="_blank"
                                        className="text-indigo-600 text-sm block hover:underline"
                                    >
                                        🔗 {link}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
}
