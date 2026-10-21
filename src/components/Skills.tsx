const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks/Tools",
    items: ["Spring Boot", "React", "Next.js", "Flask", "Gradle", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "Cloud/DevOps",
    items: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Docker", "AWS", "OCI", "Jira", "Vercel", "Cloudflare"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "SQL Server", "BigQuery", "Tableau", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
  },
  {
    category: "Embedded Systems",
    items: [ "Linux (Ubuntu)", "ROS2", "Jetson Orin Nano", "Teensy 4.1", "Arduino", "UART", "USB Serial", "PWM", "I2C", "GPIO", "Encoders", "FPGA Fundamentals"],
  },
  {
    category: "AI/Developer Tools",
    items: ["Claude Code", "GitHub Copilot", "ChatGPT", "Google Gemini"],
  },
  {
    category: "Certificates",
    items: ["Google Data Analytics", "Oracle Cloud Infrastructure (OCI) Foundations", "AWS Certified Developer - Associate (In progress)"],
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
