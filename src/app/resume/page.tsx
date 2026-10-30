import Skills from "../../components/Skills";
import ResumeViewer from "../../components/ResumeViewer";

export default function Resume() {
  return (
    <div className="flex flex-col items-center text-center mt-30">

      <h1 className="mt-12 text-4xl font-bold">Resume</h1>

      <ResumeViewer />

      <h2 className="mt-16 text-3xl font-bold">Technical Skills</h2>

      <div className="mt-8 mb-20">
        <Skills />
      </div>
    </div>
  );
}
