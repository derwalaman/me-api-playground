"use client";
import { useEffect, useState } from "react";

export default function HealthPanel() {
    const [health, setHealth] = useState(null);

    useEffect(() => {
        fetch("/api/health")
            .then(res => res.json())
            .then(setHealth);
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">❤️ Health</h2>

            <pre className="bg-slate-900 text-green-400 p-4 rounded">
                {JSON.stringify(health, null, 2)}
            </pre>
        </div>
    );
}
