export default function Sidebar({ selected, setSelected }) {
    const items = [
        "Profile",
        "Search",
        "Skills",
        "Projects",
        "Health",
        "API Tester",
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

            <h1 className="text-2xl font-bold mb-10">
                🚀 API Playground
            </h1>

            <div className="space-y-2">
                {items.map(item => (
                    <button
                        key={item}
                        onClick={() => setSelected(item)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition
              ${selected === item
                                ? "bg-indigo-600"
                                : "hover:bg-slate-800"
                            }
            `}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </aside>
    );
}
