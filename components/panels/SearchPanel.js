"use client";
import { useState } from "react";

export default function SearchPanel() {
    const [q, setQ] = useState("");
    const [data, setData] = useState(null);

    const search = async () => {
        const res = await fetch(`/api/search?q=${q}`);
        setData(await res.json());
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">🔍 Search</h2>

            <div className="flex gap-3 mb-4">
                <input
                    className="border px-4 py-2 rounded w-full"
                    value={q}
                    onChange={e => setQ(e.target.value)}
                    placeholder="Search..."
                />
                <button
                    onClick={search}
                    className="bg-indigo-600 text-white px-6 rounded"
                >
                    Search
                </button>
            </div>

            {data && (
                <pre className="bg-slate-900 text-green-400 p-4 rounded">
                    {JSON.stringify(data, null, 2)}
                </pre>
            )}
        </div>
    );
}
