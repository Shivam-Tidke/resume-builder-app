import  { useRef, useState } from "react";
import sampleResume from "./data/sampleResume.json";
import { useReactToPrint } from "react-to-print";
import Editor from "./components/Editor.jsx";
import ResumePreview from "./components/ResumePreview.jsx";
import ThemeCustomizer from "./components/ThemeCustomizer.jsx";
import ImportExport from "./components/ImportExport.jsx";
import TemplateSwitcher from "./components/TemplateSwitcher.jsx";

const fonts = [
  { label: "Roboto", value: "Roboto, sans-serif" },
  { label: "Merriweather", value: "Merriweather, serif" }
];

export default function App() {
  const [resume, setResume] = useState(sampleResume);
  const [theme, setTheme] = useState({
    mode: "light",
    primaryColor: "#2563eb",
    font: fonts[0].value,
    template: 0
  });

const previewRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `${resume.personalInfo.name}_Resume`,
  });

  return (
    <div className={`${theme.mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex flex-col md:flex-row h-screen`} style={{fontFamily: theme.font}}>
      <div className="md:w-1/2 w-full p-4 overflow-y-auto">
        <ThemeCustomizer theme={theme} setTheme={setTheme} fonts={fonts} />
        <ImportExport resume={resume} setResume={setResume} />
        <Editor resume={resume} setResume={setResume} />
      </div>
      <div className="md:w-1/2 w-full p-4 bg-white overflow-y-auto">
        <TemplateSwitcher theme={theme} setTheme={setTheme} />
        <div ref={previewRef} id="resume-preview" className="p-4 shadow rounded" style={{borderColor: theme.primaryColor}}>
          <ResumePreview resume={resume} theme={theme} />
        </div>
        <button
          onClick={handlePrint}
          className="mt-4 px-4 py-2 rounded"
          style={{background: theme.primaryColor, color: "#fff"}}
        >
          Print / Save as PDF
        </button>
      </div>
    </div>
  );
}