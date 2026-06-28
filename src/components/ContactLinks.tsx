"use client";

export default function ContactLinks() {
  const socials = [
    {
      name: "GitHub",
      description: "Check out my projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className= "w-12 h-12" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      ),
      url: "https://github.com/Ian8912",
      color: "from-[#5865F2] to-[#7289DA]",
    },
    {
      name: "LinkedIn",
      description: "Connect professionally",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/ianlingo/",
      color: "from-[#0077B5] to-[#00A0DC]",
    },
    {
      name: "Email",
      description: "ian.lingo21@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className= "w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
        </svg>
      ),
      url: "mailto:ian.lingo21@gmail.com",
      color: "from-[#E1306C] to-[#F77737]",
    },
  ];

  return (
    <section id="contact" className="py-12 w-full bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact Me
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              I would love to connect!
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <div key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform duration-300 hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-br ${social.color} p-8 rounded-2xl text-white text-center`}
                >
                  <div className="flex justify-center mb-4">{social.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                  <p className="text-white/90">{social.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}