import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src="/images/ian-lingo.png"
        alt="Ian Lingo Headshot"
        width={400}
        height={80}
        className="mt-30 rounded-xl object-cover"
        priority
      />
        <h2 className="mt-4 text-2xl font-bold">Ian Lingo</h2>
        <h3 className="mt-4 text-xl">Software Engineer</h3>
        <h1 className="mt-12 text-4xl font-bold">About Me</h1>
        <p className="mt-4 max-w-lg text-lg text-gray-400">Hello (World) ! My name is Ian Lingo, and I am an aspiring software engineer based in Austin, Texas. I graduated with a Bachelor&apos;s of Science in Computer Science with minors in Applied Math and Mass Communication from Texas State University.</p>
        <p className="mt-4 max-w-lg text-lg text-gray-400">I am highly interested in all things technology and business related. Beyond coding, I thoroughly enjoy traveling, reading, and going to the gym. I&apos;m open to trying new things as I would for learning new tools and technologies most suitable for the job.</p>
    </div>
  );
}
