import Image from "next/image";
import ImageCollage from "../components/ImageCollage";
import ContactLinks from "../components/ContactLinks";

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

        <h3 className="mt-8 text-xl text-gray-400">ian.lingo21@gmail.com</h3>

        <h1 className="mt-12 text-4xl font-bold">About Me</h1>

        <p className="mt-4 max-w-lg text-lg text-gray-400">Hello World! My name is Ian Lingo, and I am a recent computer science graduate
        focused on backend, full-stack, robotics, and systems-oriented software
        engineering. I am based in Texas with recent Bay Area experience through San Jose State University Open University. I graduated from Texas State University with a B.S. in Computer Science and minors in Applied Mathematics and Mass Communication .</p>

        <p className="mt-4 max-w-lg text-lg text-gray-400">I enjoy building practical software systems, leading technical projects, and learning new tools and technologies that help solve real engineering and business problems. Beyond coding, I enjoy traveling, reading, watching science fiction and documentaries, and going to the gym.</p>

      <ImageCollage/>
      <ContactLinks/>
    </div>
  );
}
