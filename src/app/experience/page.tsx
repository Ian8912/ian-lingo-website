const experiences = [
  {
    organization: "San Jose State University Open University",
    date: "Summer 2026",
    title: "Advanced Programming with Python",
    description:
      "Completed advanced Python coursework focused on practical programming, file processing, data handling, and software development while studying in the Bay Area.",
  },
  {
    organization: "Texas State University",
    date: "August 2022 - May 2026",
    title: "B.S. Computer Science",
    description:
      "Graduated with a Bachelor of Science in Computer Science and minors in Applied Mathematics and Mass Communication.",
  },
  {
    organization: "IEEE / IEEE RAS / IEEE-HKN / Boko Hackathon",
    date: "Aug. 2024 - May 2026",
    title: "Director, Vice President, Treasurer, and Co-Founder",
    description:
      "Co-founded IEEE Robotics & Automation Society, helped scale the organization to 100+ members, managed a $15K budget, and raised $12K+ through sponsorship outreach.",
  },
  {
    organization: "MARS Robot",
    date: "Sep. 2025 - May 2026",
    title: "Project Director / Robotics Team Lead",
    description:
      "Directed a 17-member IEEE RAS engineering team to develop an indoor robotics platform using embedded control, Jetson/ZED integration, YOLOv11 computer vision, and system testing.",
  },
  {
    organization: "IEEE Region 5 Robotics Competition",
    date: "Spring 2025",
    title: "Robotics Competition Team Member",
    description:
      "Helped build Pico, a scratch-built competition robot that placed 2nd out of 25 universities in Boulder, Colorado using Raspberry Pi 5 camera-based AprilTag detection and mecanum-drive routines.",
  },
  {
    organization: "Amazon",
    date: "Jan. 2021 - Jul. 2025",
    title: "Team Lead and Learning Ambassador",
    description:
      "Led and trained 10+ associates in outbound operations, tracked high-volume package flow, verified shipment accuracy, and supported process improvements in a fast-paced logistics environment.",
  },
  {
    organization: "Intel & The Recording Academy",
    date: "Jun. 2023 - Aug. 2023",
    title: "Data Science & Analytics Global Career Accelerator",
    description:
      "Completed industry-sponsored analytics projects using Python, SQL, Pandas, NumPy, and data visualization to analyze large datasets and produce stakeholder-facing reports.",
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