"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ApiTester from "../components/ApiTester";

import ProfilePanel from "../components/panels/ProfilePanel";
import SkillsPanel from "../components/panels/SkillsPanel";
import ProjectsPanel from "../components/panels/ProjectsPanel";
import SearchPanel from "../components/panels/SearchPanel";
import HealthPanel from "../components/panels/HealthPanel";

export default function Page() {
  const [selected, setSelected] = useState("Profile");

  return (
    <div className="flex min-h-screen bg-slate-100 text-slate-800">

      <Sidebar selected={selected} setSelected={setSelected} />

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow border border-slate-200 p-6">

          {selected === "Profile" && <ProfilePanel />}
          {selected === "Skills" && <SkillsPanel />}
          {selected === "Projects" && <ProjectsPanel />}
          {selected === "Search" && <SearchPanel />}
          {selected === "Health" && <HealthPanel />}
          {selected === "API Tester" && <ApiTester />}

        </div>
      </main>
    </div>
  );
}
