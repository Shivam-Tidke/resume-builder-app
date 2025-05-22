import { useRef } from "react";

export default function ImportExport({ resume, setResume }) {
  const fileInput = useRef();

  function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => setResume(JSON.parse(e.target.result));
    reader.readAsText(file);
  }

  function handleExport() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resume, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "resume.json");
    dlAnchor.click();
  }

  return (
    <div className="mb-4 flex gap-2 items-center">
      <input
        type="file"
        accept=".json"
        ref={fileInput}
        onChange={handleImport}
        style={{ display: "none" }}
      />
      <button
        className="px-2 py-1 border rounded"
        onClick={() => fileInput.current.click()}
      >
        Import JSON
      </button>
      <button
        className="px-2 py-1 border rounded"
        onClick={handleExport}
      >
        Export JSON
      </button>
    </div>
  );
}