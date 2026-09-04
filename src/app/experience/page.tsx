const experiences = [
  {
    organization: "Best Buy - Geek Squad",
    date: "June 2026 - Present",
    title: "Advanced Repair Technician",
    description:
      "Diagnose, troubleshoot, and repair PCs, Apple devices, and Windows, macOS, and Linux systems; isolate hardware and software faults, complete and document Apple GSX repair workflows, build and configure computers, and communicate technical solutions to clients as an Apple-certified technician.",
  },

  {
    organization: "San Jose State University Open University",
    date: "June 2026 - August 2026",
    title: "Advanced Python Programming",
    description:
      "Completing advanced Python coursework focused on software development, file processing, data analysis, automation, NumPy, Matplotlib, and practical application development while studying in the Bay Area.",
  },

  {
    organization: "Texas State University",
    date: "August 2022 - May 2026",
    title: "B.S. in Computer Science",
    description:
      "Graduated cum laude with a Bachelor of Science in Computer Science and minors in Applied Mathematics and Mass Communication as a member of the Honors College and IEEE-Eta Kappa Nu Honor Society.",
  },
  
  {
    organization: "MARS - Makerspace Autonomous Robot System",
    date: "September 2025 - May 2026",
    title: "Director of Industry Robotics",
    description:
    "Created the project from concept to physical prototype, secured a $5,000 engineering grant, and directed a 17-member software, electrical, and mechanical team. Personally developed the YOLOv11 computer-vision pipeline, contributed to Teensy 4.1 motor-control firmware, and delivered the minimum viable product 16 days ahead of schedule.",
  },
  
  {
    organization: "IEEE Robotics & Automation Society",
    date: "August 2025 - May 2026",
    title: "Co-Founder and Treasurer",
    description:
      "Co-founded the Texas State IEEE Robotics and Automation Society chapter, helped grow it to more than 100 members, coordinated technical programming and finances, and supported the formation and development of multidisciplinary student robotics teams.",
  },

  {
    organization: "Boko Hackathon",
    date: "August 2024 - April 2025",
    title: "Director and Treasurer",
    description:
      "Helped lead the planning and execution of a cybersecurity- and artificial-intelligence-focused student hackathon by coordinating student teams, judging participant code, managing industry relationships, and supporting sponsorship outreach that raised more than $12,000 from Google, Dell, BrainTrust, UFCU, IEEE, and Charles Schwab.",
  },

  {
    organization: "IEEE Region 5 Robotics Competition",
    date: "Spring 2026",
    title: "Robotics Software Team Member",
    description:
      "Contributed to C++ movement-control software and Python AprilTag computer-vision code for Pico, a Raspberry Pi 5-powered mecanum-drive robot using encoder and time-of-flight sensor feedback. Helped iterate on technical and scoring strategies that moved the team from near the bottom of the standings to 2nd place out of 25 universities.",
  },

  {
    organization: "IEEE, IEEE-HKN, and Student Engineering Organizations",
    date: "August 2024 - May 2026",
    title: "Vice President, Treasurer, and Technical Leader",
    description:
      "Led and supported technical workshops, engineering programs, company tours, industry relations, and student recruitment initiatives that added more than 80 paying members across Texas State engineering organizations.",
  },

  {
    organization: "Amazon",
    date: "January 2021 - July 2025",
    title: "Operations Associate: Team Lead and Learning Ambassador",
    description:
      "Selected at age 18 to coordinate half of an outbound operation processing 10,000+ packages daily, directly leading 10+ associates. Implemented workflow improvements that reduced average truck dispatch time from two hours to one hour, and later trained 100+ associates as a Learning Ambassador.",
  },

  {
    organization: "Intel & The Recording Academy (Grammys)",
    date: "June 2023 - August 2023",
    title: "Data Science & Analytics - Global Career Accelerator",
    description:
      "Completed industry-sponsored analytics projects using Python, SQL, Pandas, NumPy, and data visualization to clean and analyze large datasets, identify actionable trends, and present stakeholder-facing findings.",
  },
];


export default function ExperienceTimeline() {
  return (
    <section className="min-h-screen bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">Experience</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          A timeline of my software engineering, robotics, leadership, and
          academic experience.
        </p>

        <div className="relative mt-16">
          {/* Center vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-700 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${item.organization}-${item.date}`}
                  className="relative grid grid-cols-1 md:grid-cols-2"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-400 md:left-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="rounded-2xl border border-gray-700 bg-gray-950 p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400">
                      <div
                        className={`flex flex-col gap-2 ${
                          isLeft ? "md:items-end" : "md:items-start"
                        }`}
                      >
                        <span className="inline-block rounded-md bg-gray-800 px-3 py-1 text-lg font-bold text-sky-400">
                          {item.organization}
                        </span>

                        <span className="text-sm text-gray-400">
                          {item.date}
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl font-semibold text-white">
                        {item.title}
                      </h2>

                      <p className="mt-3 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}