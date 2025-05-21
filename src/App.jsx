import { useState } from "react";
import sampleResume from "./data/sampleResume.json";
import Editor from "./components/Editor.jsx";
import ResumePreview from "./components/ResumePreview.jsx";
import ThemeCustomizer from "./components/ThemeCustomizer.jsx";
import ImportExport from "./components/ImportExport.jsx";
import TemplateSwitcher from "./components/TemplateSwitcher.jsx";

function App() {
  const [resume, setResume] = useState(sampleResume);
  const [theme, setTheme] = useState({
    mode: "light",
    primaryColor: "#2563eb", // blue-600
    font: "Roboto",
    template: 0
  });

  return (
    <div className={`flex h-screen ${theme.mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className="w-1/2 p-4 overflow-y-auto">
        <ThemeCustomizer theme={theme} setTheme={setTheme} />
        <ImportExport resume={resume} setResume={setResume} />
        <Editor resume={resume} setResume={setResume} />
      </div>
      <div className="w-1/2 p-4 bg-white overflow-y-auto">
        <TemplateSwitcher theme={theme} setTheme={setTheme} />
        <ResumePreview resume={resume} theme={theme} />
        <button onClick={() => window.print()} className="mt-4 btn btn-primary">Print / Save as PDF</button>
      </div>
    </div>
  );
}

export default App;