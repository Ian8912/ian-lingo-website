import Image from "next/image";
import { cn } from "../app/lib/utils";

type CollageImage = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

const images: CollageImage[] = [
    {
        src: "/images/chess-opening-gui.png",
        alt: "Java Chess Game App",
        className: "sm:col-span-2",
        imageClassName: "object-contain",
    },

    {
        src: "/images/mars-frontrobot.jpeg",
        alt: "MARS Front Photo",
    },

    {
        src: "/images/mars-groupphoto1.jpeg",
        alt: "MARS Group Photo",
    },

    {
        src: "/images/weather-app-homepage.png",
        alt: "Weather App Homepage",
    },

    {
        src: "/images/ras-r5robotics-pico-photo.png",
        alt: "IEEE R5 Pico Robot Photo",
    },

    {
        src: "/images/ieee-txst-homepage.png",
        alt: "IEEE TXST Homepage",
        className: "sm:col-span-2",
    },

    {
        src: "/images/mars-research-poster.png",
        alt: "MARS Research Poster",
        className: "sm:col-span-2",
        imageClassName: "object-contain bg-white",
    },

    {
        src: "/images/both-cnc-machine-detected.jpeg",
        alt: "MARS CNC Machine Detection",
    },

    {
        src: "/images/chess-moveeval-gui.png",
        alt: "Java Chess Game Move Evaluation Photo",
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
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-2xl border border-gray-700 bg-gray-900",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={cn(
          "transition-transform duration-300 hover:scale-105",
          image.imageClassName ?? "object-cover bg-black"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
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