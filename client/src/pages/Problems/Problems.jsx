import React, { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { problems } from "../../data/problems";

const tags = [
  { name: "Array", count: 1920 },
  { name: "String", count: 1015 },
  { name: "Hash Table", count: 808 },
  { name: "Dynamic Programming", count: 715 },
  { name: "Math", count: 690 },
  { name: "Sorting", count: 412 },
  { name: "Greedy", count: 480 },
  { name: "Depth-First Search", count: 510 },
  { name: "Binary Search", count: 405 },
  { name: "Two Pointers", count: 320 },
];

function Chip({ children, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded bg-[#262626] px-2.5 py-1 text-[12px] text-text-primary">
      {children}
      {onRemove && (
        <button onClick={onRemove} className="text-text-muted hover:text-white">
          <X size={12} />
        </button>
      )}
    </span>
  );
}

function Problems() {
  const [search, setSearch] = useState("");
  const [diff, setDiff] = useState("");
  const [status, setStatus] = useState("");
  const [openFilter, setOpenFilter] = useState(null);

  const filtered = problems.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (!diff || p.difficulty === diff) &&
      (!status || p.status === status)
  );

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      {/* Title */}
      <div className="mb-5">
        <h1 className="text-[28px] font-semibold text-white">Problems</h1>

        <p className="mt-1 text-[13px] text-text-secondary">
          {filtered.length} problems
        </p>
      </div>

      {/* Search + Filters Bar */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[240px]">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search questions"
            className="h-9 w-full rounded-md border border-border bg-[#262626] pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-[#5a5a5a]"
          />
        </div>

        {/* Difficulty */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenFilter(openFilter === "diff" ? null : "diff")
            }
            className="flex h-9 items-center gap-2 rounded-md border border-border bg-[#262626] px-3 text-[13px] text-text-secondary hover:text-white"
          >
            Difficulty
            <ChevronDown size={14} />
          </button>

          {openFilter === "diff" && (
            <div className="absolute right-0 mt-1 w-44 rounded-md border border-border bg-[#262626] shadow-xl z-20">
              {["", "Easy", "Medium", "Hard"].map((d) => (
                <button
                  key={d || "All"}
                  onClick={() => {
                    setDiff(d);
                    setOpenFilter(null);
                  }}
                  className="block w-full px-4 py-2 text-left text-[13px] text-text-secondary hover:bg-[#3a3a3a] hover:text-white"
                >
                  {d || "All"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Status */}
        <div className="relative">
          <button
            onClick={() =>
              setOpenFilter(openFilter === "status" ? null : "status")
            }
            className="flex h-9 items-center gap-2 rounded-md border border-border bg-[#262626] px-3 text-[13px] text-text-secondary hover:text-white"
          >
            Status
            <ChevronDown size={14} />
          </button>

          {openFilter === "status" && (
            <div className="absolute right-0 mt-1 w-44 rounded-md border border-border bg-[#262626] shadow-xl z-20">
              {["", "Todo", "Attempted", "Solved"].map((s) => (
                <button
                  key={s || "All"}
                  onClick={() => {
                    setStatus(s);
                    setOpenFilter(null);
                  }}
                  className="block w-full px-4 py-2 text-left text-[13px] text-text-secondary hover:bg-[#3a3a3a] hover:text-white"
                >
                  {s || "All"}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-[#262626] px-3 text-[13px] text-text-secondary hover:text-white">
          Tags
          <ChevronDown size={14} />
        </button>

        <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-[#262626] px-3 text-[13px] text-text-secondary hover:text-white">
          Companies
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Active filter chips */}
      {(diff || status) && (
        <div className="mb-3 flex items-center gap-2">
          <span className="text-[12px] text-text-muted">Active Filters:</span>

          {diff && (
            <Chip onRemove={() => setDiff("")}>
              <span className="text-text-muted">Difficulty:</span>
              <span
                className={
                  diff === "Easy"
                    ? "text-[#00b8a3]"
                    : diff === "Medium"
                    ? "text-[#ffc01e]"
                    : "text-[#ff375f]"
                }
              >
                {diff}
              </span>
            </Chip>
          )}

          {status && (
            <Chip onRemove={() => setStatus("")}>
              <span className="text-text-muted">Status:</span>
              <span>{status}</span>
            </Chip>
          )}
        </div>
      )}

      {/* Body: Sidebar + Table */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr]">
        {/* Tags Sidebar */}
        <aside className="hidden lg:block">
          <div className="rounded-lg border border-border bg-[#262626]">
            <div className="border-b border-border px-4 py-3">
              <h3 className="text-[13px] font-medium uppercase tracking-wide text-text-muted">
                Tags
              </h3>
            </div>

            <ul className="p-2">
              {tags.map((t) => (
                <li
                  key={t.name}
                  className="flex items-center justify-between rounded px-3 py-2 text-[13px] text-text-secondary hover:bg-[#3a3a3a] hover:text-white cursor-pointer"
                >
                  <span>{t.name}</span>
                  <span className="text-[11px] text-text-muted">{t.count}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-border bg-[#262626]">
          <div className="grid grid-cols-[60px_1fr_120px_140px_140px] items-center border-b border-border bg-[#2e2e2e] px-6 py-3 text-[11px] font-medium uppercase tracking-wider text-text-muted">
            <div></div>
            <div>Title</div>
            <div>Acceptance</div>
            <div>Difficulty</div>
            <div>Frequency</div>
          </div>

          {filtered.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-[60px_1fr_120px_140px_140px] items-center border-b border-[#2e2e2e] px-6 py-3.5 text-sm hover:bg-[#2e2e2e]"
            >
              {/* Status circle */}
              <div className="flex items-center">
                <span className="text-[20px] leading-none text-text-muted">
                  ○
                </span>
              </div>

              {/* Title */}
              <div className="flex items-center gap-2">
                <span className="text-text-primary">
                  {p.id}.{" "}
                  <a
                    href={`/problems/${p.slug}`}
                    className="text-[#4ea1ff] hover:underline cursor-pointer"
                  >
                    {p.title}
                  </a>
                </span>

                {p.premium && (
                  <span className="rounded bg-[#3d2f1f] px-1.5 py-0.5 text-[10px] font-medium text-[#f7c948]">
                    Premium
                  </span>
                )}
              </div>

              <div className="text-[13px] text-text-secondary">
                {p.acceptance}%
              </div>

              <div
                className={`text-[13px] ${
                  p.difficulty === "Easy"
                    ? "text-[#00b8a3]"
                    : p.difficulty === "Medium"
                    ? "text-[#ffc01e]"
                    : "text-[#ff375f]"
                }`}
              >
                {p.difficulty}
              </div>

              <div className="flex items-center gap-2 text-text-secondary">
                <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#3a3a3a]">
                  <div
                    className="h-full bg-[#ffa116]"
                    style={{ width: `${p.frequency}%` }}
                  />
                </div>

                <span className="text-[12px]">{p.frequency}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-1">
        <button className="flex h-8 w-8 items-center justify-center rounded border border-border bg-[#262626] text-text-secondary hover:text-white">
          ‹
        </button>

        {[1, 2, 3, 4, 5].map((p) => (
          <button
            key={p}
            className={`flex h-8 min-w-8 items-center justify-center rounded border px-3 text-[13px] ${
              p === 1
                ? "border-[#ffa116] bg-[#ffa116] text-[#1a1a1a] font-medium"
                : "border-border bg-[#262626] text-text-secondary hover:text-white"
            }`}
          >
            {p}
          </button>
        ))}

        <span className="flex h-8 min-w-8 items-center justify-center text-text-muted">
          ...
        </span>

        <button className="flex h-8 w-8 items-center justify-center rounded border border-border bg-[#262626] text-text-secondary hover:text-white">
          ›
        </button>
      </div>
    </div>
  );
}

export default Problems;
