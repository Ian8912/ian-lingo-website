import type { SkillGroup } from "./ResumeData";

export default function Skills({ skills }: { skills: SkillGroup[] }) {
  return (
    <div className="flex max-w-xl flex-col gap-6">
      {skills.map((group) => (
        <div key={group.category}>
          <h2 className="text-lg font-semibold">{group.category}</h2>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-sm text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
