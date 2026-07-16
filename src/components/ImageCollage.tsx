import Image from "next/image";
import Link from "next/link";
import { cn } from "../app/lib/utils";

type CollageImage = {
  src: string;
  alt: string;
  href: string;
  className?: string;
  imageClassName?: string;
};

const images: CollageImage[] = [
    {
        src: "/images/chess-opening-gui.png",
        alt: "Java Chess Game App",
        href: "https://github.com/Ian8912/ChessOOP",
        className: "sm:col-span-2",
        imageClassName: "object-contain",
    },

    {
        src: "/images/mars-frontrobot.jpeg",
        alt: "MARS Front Photo",
        href: "https://github.com/TXST-RAS/makerspace-detector",

    },

    {
        src: "/images/mars-groupphoto1.jpeg",
        alt: "MARS Group Photo",
        href: "https://github.com/TXST-RAS/makerspace-detector",

    },

    {
        src: "/images/weather-app-homepage.png",
        alt: "Weather App Homepage",
        href: "https://github.com/Ian8912/Weather-Forecasting-App",

    },

    {
        src: "/images/ras-r5robotics-pico-photo.png",
        alt: "IEEE R5 Pico Robot Photo",
        href: "https://www.linkedin.com/posts/ianlingo_i-am-proud-to-share-that-my-teammates-nathan-activity-7449921401228120064-kkN7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD841-cBw1y2ZdQ3TQ3xJMf7Zh5OS5QP88k",
    },

    {
        src: "/images/ieee-txst-homepage.png",
        alt: "IEEE TXST Homepage",
        href: "https://github.com/Ian8912/ieee-txst-website",
        className: "sm:col-span-2",
    },

    {
        src: "/images/mars-research-poster.png",
        alt: "MARS Research Poster",
        href: "https://github.com/TXST-RAS/makerspace-detector",
        className: "sm:col-span-2",
        imageClassName: "object-contain bg-white",
    },

    {
        src: "/images/both-cnc-machine-detected.jpeg",
        alt: "MARS CNC Machine Detection",
        href: "https://github.com/TXST-RAS/makerspace-detector",
    },

    {
        src: "/images/chess-moveeval-gui.png",
        alt: "Java Chess Game Move Evaluation Photo",
        href: "https://github.com/Ian8912/ChessOOP",
        imageClassName: "object-cover",
    },
];

function BentoCard({
  image,
  className,
}: {
  image: CollageImage;
  className?: string;
}) {
  return (
    <Link
      href={image.href}
      className={cn(
        "group relative block h-64 w-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-900",
        "transition-transform duration-300 hover:-translate-y-1 hover:border-sky-400",
        className
      )}
      aria-label={`View ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={cn(
          "transition-transform duration-300 group-hover:scale-105",
          image.imageClassName ?? "object-cover bg-black"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </Link>
  );
}

export default function ImageCollage() {
  return (
    <section className="w-full px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-white">
          Project Gallery
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-4 auto-rows-[16rem] sm:grid-cols-4">
          {images.map((image) => (
            <BentoCard
              key={image.src}
              image={image}
              className={image.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}