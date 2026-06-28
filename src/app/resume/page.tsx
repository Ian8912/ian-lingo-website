import Skills from "../../components/Skills";

const RESUME_PDF = "/docs/Ian_Lingo_SWE_Public_Resume.pdf";

export default function Resume() {
  return (
    <div className="flex flex-col items-center text-center mt-30">

      <h1 className="mt-12 text-4xl font-bold">Resume</h1>

      <a
        href={RESUME_PDF}
        download
        className="mt-6 rounded-full border border-gray-700 bg-gray-900 px-6 py-2 text-gray-200 transition-colors hover:text-sky-400"
      >
        Download Résumé (PDF) ↓
      </a>

      <object
        data={RESUME_PDF}
        type="application/pdf"
        className="mt-8 h-[80vh] w-full max-w-3xl rounded-2xl border border-gray-700"
      >
        <p className="p-6 text-gray-400">
          Your browser can&apos;t display the PDF inline.{" "}
          <a href={RESUME_PDF} className="text-sky-400 hover:underline">
            Download it here
          </a>
          .
        </p>
      </object>

      <h2 className="mt-16 text-3xl font-bold">Technical Skills</h2>

      <div className="mt-8 mb-20">
        <Skills />
      </div>
    </div>
  );
}
