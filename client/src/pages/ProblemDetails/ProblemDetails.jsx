import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import DescriptionTab from "./DescriptionTab";
import EditorialTab from "./EditorialTab";
import SolutionTab from "./SolutionTab";
import SubmissionTab from "./SubmissionTab";
import DiscussionTab from "./DiscussionTab";

import EditorToolbar from "../../components/editor/EditorToolbar";
import CodeEditor from "../../components/editor/CodeEditor";
import OutputPanel from "../../components/editor/OutputPanel";
import RunButton from "../../components/editor/RunButton";
import SubmitButton from "../../components/editor/SubmitButton";

const tabs = [
  { key: "description", label: "Description" },
  { key: "editorial", label: "Editorial" },
  { key: "solutions", label: "Solutions" },
  { key: "submissions", label: "Submissions" },
  { key: "discuss", label: "Discuss" },
];

function ProblemDetails() {
  const { problemId } = useParams();
  const [active, setActive] = useState("description");

  return (
    <div className="flex h-[calc(100vh-56px)] flex-col">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        {/* Left: Description Tabs */}
        <div className="flex h-full flex-col border-r border-[#2e2e2e] bg-[#1a1a1a]">
          <div className="flex items-center justify-between border-b border-[#2e2e2e] bg-[#262626] px-4 py-3">
            <Link
              to="/problems"
              className="text-[13px] text-[#4ea1ff] hover:underline"
            >
              ‹ Problem List
            </Link>

            <h1 className="text-[15px] font-medium text-white">Two Sum</h1>
          </div>

          <div className="flex border-b border-[#2e2e2e] bg-[#1f1f1f] px-4">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`-mb-px border-b-2 px-4 py-2.5 text-[13px] cursor-pointer ${
                  active === t.key
                    ? "border-[#ffa116] text-white font-medium"
                    : "border-transparent text-text-secondary hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto bg-[#1a1a1a] p-6">
            {active === "description" && <DescriptionTab />}
            {active === "editorial" && <EditorialTab />}
            {active === "solutions" && <SolutionTab />}
            {active === "submissions" && <SubmissionTab />}
            {active === "discuss" && <DiscussionTab />}
          </div>
        </div>

        {/* Right: Code Editor */}
        <div className="flex h-full flex-col bg-[#1f1f1f]">
          <EditorToolbar />

          <div className="flex items-center justify-between border-b border-[#2e2e2e] bg-[#262626] px-4 py-2">
            <span className="text-[12px] text-text-secondary">
              <span className="text-text-muted">Last executed input:</span>{" "}
              nums = [2,7,11,15], target = 9
            </span>

            <div className="flex items-center gap-2">
              <RunButton />
              <SubmitButton />
            </div>
          </div>

          <div className="flex-1 overflow-hidden bg-[#1a1a1a]">
            <CodeEditor />
          </div>

          <OutputPanel />
        </div>
      </div>
    </div>
  );
}

export default ProblemDetails;
