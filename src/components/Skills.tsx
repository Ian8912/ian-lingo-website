const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript", "MIPS", "R"],
  },
  {
    category: "Frameworks/Tools",
    items: ["React", "Next.js", "Flask", "Spring Boot", "Gradle", "Jupyter Notebook", "ROS2", "Docker", "YOLO", "OpenCV"],
  },
  {
    category: "Cloud/DevOps",
    items: ["AWS", "OCI", "Git", "GitHub", "GitHub Actions", "Atlassian (Jira, Bitbucket)", "CI/CD", "Vercel", "Firebase"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "SQL Server", "BigQuery", "Tableau", "Pandas", "NumPy", "Plotly"],
  },
  {
    category: "Operating Systems",
    items: ["Linux (Ubuntu)", "Windows", "macOS"],
  },
  {
    category: "Certificates",
    items: ["Google Data Analytics", "OCI Foundations", "AWS Cloud Practitioner (In progress)"],
  },
];

export default function Skills() {
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
