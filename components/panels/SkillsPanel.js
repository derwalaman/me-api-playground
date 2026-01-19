"use client";
import { useEffect, useState } from "react";

export default function SkillsPanel() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch("/api/skills/top")
            .then(res => res.json())
            .then(setSkills);
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">🧠 Top Skills</h2>

            <div className="flex gap-3 flex-wrap">
                {skills.map(skill => (
                    <span
                        key={skill}
                        className="bg-green-100 text-green-700 px-4 py-2 rounded-full"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
