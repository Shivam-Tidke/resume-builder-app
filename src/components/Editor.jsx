
function Editor({ resume, setResume }) {
  function handleChange(section, field, value) {
    setResume(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  }

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">Edit Resume</h2>
      <div className="mb-4">
        <label>Name</label>
        <input
          className="input"
          value={resume.personalInfo.name}
          onChange={e => handleChange("personalInfo", "name", e.target.value)}
        />
      </div>
      {/* Repeat for other fields and sections */}
      {/* For arrays (education, workExperience), map and allow add/remove */}
    </div>
  );
}
export default Editor;
