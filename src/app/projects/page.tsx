import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "IEEE TXST Website Platform",
    href: "https://github.com/TXST-IEEE/website",
    image: "/images/ieee-txst-homepage.png",
    alt: "IEEE TXST Website Home Page",
    description:
      "Production web platform for IEEE at Texas State University built with Next.js, TypeScript, Tailwind CSS, Vercel, and Cloudflare. Led a 7-member student development team to replace a legacy WordPress site serving 100+ users.",
  },
  {
    title: "Java Chess Game Application",
    href: "https://github.com/Ian8912/ChessOOP",
    image: "/images/chess-opening-gui.png",
    alt: "Full-Stack Java Chess Game",
    description:
      "Full-stack Java chess application with a Swing client, Spring Boot REST API, PostgreSQL leaderboard, Elo ratings, and a from-scratch AI opponent using negamax, alpha-beta pruning, and quiescence search.",
  },
  {
    title: "MARS: Makerspace Autonomous Robot System",
    href: "https://github.com/TXST-RAS/makerspace-detector",
    image: "/images/mars-frontrobot.jpeg",
    alt: "MARS: Makerspace Autonomous Robot System",
    description:
      "Autonomous service robot platform developed with ROS2, NVIDIA Jetson Orin Nano, ZED 2i, RPLidar A1, embedded motor control, and YOLOv11 computer vision. Directed a 17-member IEEE RAS team across hardware, perception, integration, and testing.",
  },
  {
    title: "IEEE R5 Robotics Competition Robot",
    href: "https://www.linkedin.com/posts/ianlingo_i-am-proud-to-share-that-my-teammates-nathan-activity-7449921401228120064-kkN7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD841-cBw1y2ZdQ3TQ3xJMf7Zh5OS5QP88k",
    image: "/images/ras-r5robotics-pico-photo.png",
    alt: "IEEE R5 Robotics Competition Robot",
    description:
      "Scratch-built competition robot that placed 2nd out of 25 universities at IEEE Region 5 in Boulder, Colorado. The robot used a Raspberry Pi 5 camera for AprilTag detection and task-specific mecanum-drive motor routines under competition constraints.",
  },
  {
    title: "Weather Forecasting Application",
    href: "https://github.com/Ian8912/Weather-Forecasting-App",
    image: "/images/weather-app-homepage.png",
    alt: "Weather Forecasting Application",
    description:
      "Responsive full-stack weather dashboard built with React, Flask, Firebase, Supabase, and weather APIs to support geolocation search, real-time forecasts, air quality, UV index, and interactive map data.",
  },
];

// Additional technical work shown as a compact text list (no screenshots) to
// distinguish it from the visual project cards above. Use this for smaller
// projects, open-source contributions, coursework, or experiments.
const technicalWork = [
  {
    title: "Intel Data Center Sustainability Analysis",
    href: "https://github.com/Ian8912/Intel-Data-Center-Analysis",
    image: "/images/intel-data-center-logo.png",
    alt: "Intel Data Center Sustainability Analysis",
    description:
      "SQL and data visualization project analyzing U.S. regional energy production, renewable energy reliance, and surplus trends to recommend potential data center locations for Intel's sustainability team.",
  },
  {
    title: "Grammys Web Analytics Analysis",
    href: "https://github.com/Ian8912/Grammy-Data-Analysis",
    image: "/images/grammy-awards-logo.png",
    alt: "Grammys Web Analytics Analysis",
    description:
      "Python data analytics project analyzing website traffic trends, audience behavior, and the impact of splitting the Grammys and Recording Academy websites using Pandas, NumPy, Plotly, and Jupyter Notebook.",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center text-center mt-30">

      <h1 className="mt-12 text-4xl font-bold">Projects</h1>

      <a
        href="https://github.com/Ian8912"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-gray-400 transition-colors hover:text-sky-400"
      >
        View all projects on my GitHub →
      </a>

      <div className="mt-12 flex flex-col gap-12">
        {projects.map((project) => (
          <article key={project.title} className="flex max-w-xl flex-col text-left">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold transition-colors hover:text-sky-400"
            >
              {project.title}
            </Link>

            <div className="mt-4 flex items-start gap-4">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-50 w-50 shrink-0 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </Link>

              <p className="text-gray-400">{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Additional Technical Work */}
      <h2 className="mt-24 text-3xl font-bold">Technical Work</h2>

      <div className="mt-12 mb-20 flex flex-col gap-8">
        {technicalWork.map((item) => (
          <article key={item.title} className="max-w-xl text-left">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold transition-colors hover:text-sky-400"
            >
              {item.title}
            </Link>

            <div className="mt-4 flex items-start gap-4">
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-50 w-50 shrink-0 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </Link>

              <p className="text-gray-400">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
