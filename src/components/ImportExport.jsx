

function ImportExport({ resume, setResume }) {
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
    <div className="mb-4 flex gap-2">
      <input type="file" accept=".json" onChange={handleImport} />
      <button onClick={handleExport} className="btn btn-secondary">Export JSON</button>
    </div>
  );
}

export default ImportExport;