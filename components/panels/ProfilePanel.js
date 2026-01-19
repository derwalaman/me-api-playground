"use client";

import { useEffect, useState } from "react";

export default function ProfilePanel() {
    const [profile, setProfile] = useState(null);
    const [form, setForm] = useState(null);
    const [edit, setEdit] = useState(false);

    const loadProfile = async () => {
        const res = await fetch("/api/profile");
        const data = await res.json();
        setProfile(data);
        setForm(JSON.parse(JSON.stringify(data)));
    };

    useEffect(() => {
        loadProfile();
    }, []);

    if (!profile) return <p>Loading profile...</p>;

    const updateProfile = async () => {
        await fetch("/api/profile", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        setEdit(false);
        loadProfile();
    };

    const updateProject = (index, field, value) => {
        const updated = [...form.projects];
        updated[index][field] = value;
        setForm({ ...form, projects: updated });
    };

    const addProject = () => {
        setForm({
            ...form,
            projects: [
                ...form.projects,
                { title: "", description: "", links: [""] },
            ],
        });
    };

    const removeProject = index => {
        const updated = [...form.projects];
        updated.splice(index, 1);
        setForm({ ...form, projects: updated });
    };

    const addWork = () => {
        setForm({
            ...form,
            work: [...(form.work || []), ""],
        });
    };

    const updateWork = (index, value) => {
        const updated = [...form.work];
        updated[index] = value;
        setForm({ ...form, work: updated });
    };

    const removeWork = index => {
        const updated = [...form.work];
        updated.splice(index, 1);
        setForm({ ...form, work: updated });
    };

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">👤 Profile</h2>

                {!edit ? (
                    <button
                        onClick={() => setEdit(true)}
                        className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
                    >
                        Edit Profile
                    </button>
                ) : (
                    <div className="flex gap-3">
                        <button
                            onClick={updateProfile}
                            className="bg-green-600 text-white px-5 py-2 rounded-lg"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                setEdit(false);
                                setForm(profile);
                            }}
                            className="bg-slate-400 text-white px-5 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>

            {/* BASIC INFO */}
            <div className="bg-white border rounded-xl p-6 space-y-6">
                <h3 className="text-lg font-semibold">Basic Information</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    {["name", "email", "education"].map(field => (
                        <div key={field}>
                            <label className="font-medium capitalize">{field}</label>
                            {edit ? (
                                <input
                                    className="border w-full p-2 rounded"
                                    value={form[field] || ""}
                                    onChange={e =>
                                        setForm({ ...form, [field]: e.target.value })
                                    }
                                />
                            ) : (
                                <p>{profile[field]}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* SKILLS */}
            <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Skills</h3>

                {edit ? (
                    <input
                        className="border w-full p-2 rounded"
                        value={form.skills.join(", ")}
                        onChange={e =>
                            setForm({
                                ...form,
                                skills: e.target.value
                                    .split(",")
                                    .map(s => s.trim()),
                            })
                        }
                    />
                ) : (
                    <div className="flex gap-2 flex-wrap">
                        {profile.skills.map(skill => (
                            <span
                                key={skill}
                                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* WORK */}
            <div className="bg-white border rounded-xl p-6 space-y-4">
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">💼 Work</h3>

                    {edit && (
                        <button
                            onClick={addWork}
                            className="bg-indigo-600 text-white px-4 py-1 rounded"
                        >
                            + Add
                        </button>
                    )}
                </div>

                {form.work?.map((job, index) => (
                    <div key={index} className="flex gap-3">
                        {edit ? (
                            <>
                                <input
                                    className="border w-full p-2 rounded"
                                    value={job}
                                    onChange={e =>
                                        updateWork(index, e.target.value)
                                    }
                                    placeholder="Frontend Intern at XYZ"
                                />
                                <button
                                    onClick={() => removeWork(index)}
                                    className="text-red-600"
                                >
                                    ✕
                                </button>
                            </>
                        ) : (
                            <p>• {job}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* PROJECTS */}
            <div className="bg-white border rounded-xl p-6 space-y-6">
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">🚀 Projects</h3>

                    {edit && (
                        <button
                            onClick={addProject}
                            className="bg-indigo-600 text-white px-4 py-2 rounded"
                        >
                            + Add Project
                        </button>
                    )}
                </div>

                {form.projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                        {edit ? (
                            <>
                                <input
                                    className="border w-full p-2 rounded"
                                    placeholder="Project Title"
                                    value={project.title}
                                    onChange={e =>
                                        updateProject(index, "title", e.target.value)
                                    }
                                />

                                <textarea
                                    className="border w-full p-2 rounded"
                                    placeholder="Description"
                                    value={project.description}
                                    onChange={e =>
                                        updateProject(index, "description", e.target.value)
                                    }
                                />

                                <input
                                    className="border w-full p-2 rounded"
                                    placeholder="Links (comma separated)"
                                    value={project.links.join(", ")}
                                    onChange={e =>
                                        updateProject(
                                            index,
                                            "links",
                                            e.target.value
                                                .split(",")
                                                .map(l => l.trim())
                                        )
                                    }
                                />

                                <button
                                    onClick={() => removeProject(index)}
                                    className="text-red-600 text-sm"
                                >
                                    Remove Project
                                </button>
                            </>
                        ) : (
                            <>
                                <h4 className="font-semibold text-lg">
                                    {project.title}
                                </h4>
                                <p>{project.description}</p>
                                {project.links.map(link => (
                                    <a
                                        key={link}
                                        href={link}
                                        target="_blank"
                                        className="text-indigo-600 block"
                                    >
                                        🔗 {link}
                                    </a>
                                ))}
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* LINKS */}
            <div className="bg-white border rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold">🔗 Links</h3>

                {["github", "linkedin", "portfolio"].map(key => (
                    <div key={key}>
                        <label className="capitalize font-medium">{key}</label>

                        {edit ? (
                            <input
                                className="border w-full p-2 rounded"
                                value={form.links?.[key] || ""}
                                onChange={e =>
                                    setForm({
                                        ...form,
                                        links: {
                                            ...form.links,
                                            [key]: e.target.value,
                                        },
                                    })
                                }
                            />
                        ) : (
                            <a
                                href={profile.links?.[key]}
                                target="_blank"
                                className="text-indigo-600 block"
                            >
                                {profile.links?.[key]}
                            </a>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
}
