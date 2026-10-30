export type SkillGroup = {
  category: string;
  items: string[];
};

export type Resume = {
  label: string;
  file: string;
  skills: SkillGroup[];
};

// NOTE: The skill splits below are a reasonable first pass — adjust the
// `items` in each list to match what's actually on each resume.
export const RESUMES: Resume[] = [
  {
    label: "Software Engineer",
    file: "/docs/ian-lingo-public-swe-resume.pdf",
    skills: [
      {
        category: "Programming Languages",
        items: ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL"],
      },
      {
        category: "Frameworks/Tools",
        items: ["Spring Boot", "React", "Next.js", "Flask", "Gradle", "REST APIs", "Tailwind CSS"],
      },
      {
        category: "Testing",
        items: ["JUnit 5", "Mockito", "Testcontainers", "pytest"],
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
        category: "AI/Developer Tools",
        items: ["Claude Code", "GitHub Copilot", "ChatGPT", "Google Gemini"],
      },
      {
        category: "Certificates",
        items: ["Google Data Analytics", "Oracle Cloud Infrastructure (OCI) Foundations", "AWS Certified Developer - Associate (In progress)"],
      },
    ],
  },
  {
    label: "Embedded Systems",
    file: "/docs/ian-lingo-public-embedded-swe-resume.pdf",
    skills: [
      {
        category: "Programming Languages",
        items: ["C++", "Python", "C", "Java", "SQL"],
      },
      {
        category: "Embedded Systems",
        items: ["Linux (Ubuntu)", "ROS2", "Jetson Orin Nano", "Teensy 4.1", "Arduino", "UART", "USB Serial", "PWM", "I2C", "GPIO", "Encoders", "FPGA Fundamentals"],
      },
      {
        category: "Frameworks/Tools",
        items: ["React", "Next.js", "Gradle", "REST APIs"],
      },
      {
        category: "Testing",
        items: ["pytest", "JUnit 5"],
      },
      {
        category: "Cloud/DevOps",
        items: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Docker"],
      },
      {
        category: "AI/Developer Tools",
        items: ["Claude Code", "GitHub Copilot", "ChatGPT", "Google Gemini"],
      },
      {
        category: "Certificates",
        items: ["Google Data Analytics", "Oracle Cloud Infrastructure (OCI) Foundations", "AWS Certified Developer - Associate (In progress)"],
      },
    ],
  },
];
