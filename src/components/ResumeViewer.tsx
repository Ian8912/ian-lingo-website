"use client";

import { useState } from "react";

const RESUMES = [
  { label: "Software Engineer", file: "/docs/ian-lingo-public-swe-resume.pdf" },
  { label: "Embedded Systems", file: "/docs/ian-lingo-public-embedded-swe-resume.pdf" },
] as const;

export default function ResumeViewer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = RESUMES[selectedIndex];

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-6 inline-flex rounded-full border border-gray-700 bg-gray-900 p-1">
        {RESUMES.map((resume, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={resume.file}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-sky-500 text-white"
                  : "text-gray-300 hover:text-sky-400"
              }`}
            >
              {resume.label}
            </button>
          );
        })}
      </div>

      <a
        href={selected.file}
        download
        className="mt-6 rounded-full border border-gray-700 bg-gray-900 px-6 py-2 text-gray-200 transition-colors hover:text-sky-400"
      >
        Download {selected.label} Resume (PDF) ↓
      </a>

      <object
        key={selected.file}
        data={selected.file}
        type="application/pdf"
        className="mt-8 h-[80vh] w-full max-w-3xl rounded-2xl border border-gray-700"
      >
        <p className="p-6 text-gray-400">
          Your browser can&apos;t display the PDF inline.{" "}
          <a href={selected.file} className="text-sky-400 hover:underline">
            Download it here
          </a>
          .
        </p>
      </object>
    </div>
  );
}
