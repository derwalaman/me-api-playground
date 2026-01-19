"use client";
import { useState } from "react";

export default function ApiTester() {
  const [endpoint, setEndpoint] = useState("/api/profile");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("{}");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState(null);

  const sendRequest = async () => {
    try {
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: method !== "GET" ? body : undefined,
      });

      const text = await res.text();
      setStatus(res.status);
      setResponse(text);
    } catch (err) {
      setResponse(err.message);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">🧪 API Tester</h2>

      <div className="flex gap-4">
        <select
          value={method}
          onChange={e => setMethod(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
        </select>

        <input
          value={endpoint}
          onChange={e => setEndpoint(e.target.value)}
          className="border px-4 py-2 w-full rounded"
        />
      </div>

      {method !== "GET" && (
        <textarea
          rows={8}
          value={body}
          onChange={e => setBody(e.target.value)}
          className="w-full border p-3 rounded font-mono"
        />
      )}

      <button
        onClick={sendRequest}
        className="bg-indigo-600 text-white px-6 py-2 rounded"
      >
        Send Request
      </button>

      {status && <p>Status: {status}</p>}

      <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto text-sm">
        {response}
      </pre>
    </div>
  );
}
