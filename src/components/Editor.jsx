
function arrayField(section, arr, setArr, fields) {
  return (
    <div className="space-y-2">
      {arr.map((item, idx) => (
        <div key={idx} className="border p-2 rounded mb-2">
          {fields.map(f => (
            <div key={f.name}>
              <label className="block">{f.label}</label>
              <input
                className="border p-1 w-full"
                value={item[f.name]}
                onChange={e => {
                  const copy = [...arr];
                  copy[idx][f.name] = e.target.value;
                  setArr(copy);
                }}
              />
            </div>
          ))}
          <button
            type="button"
            className="text-red-500 mt-1"
            onClick={() => setArr(arr.filter((_, i) => i !== idx))}
          >Remove</button>
        </div>
      ))}
      <button
        type="button"
        className="text-blue-600"
        onClick={() => setArr([...arr, Object.fromEntries(fields.map(f => [f.name, ""]))])}
      >Add</button>
    </div>
  );
}

export default function Editor({ resume, setResume }) {
  // Helper for updating nested fields
  const handleChange = (section, field, value) => {
    setResume(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Helper for array sections
  const handleArrayChange = (section, arr) => {
    setResume(prev => ({
      ...prev,
      [section]: arr
    }));
  };

  // Helper for grouped skills
  const handleSkillChange = (group, idx, value) => {
    const newSkills = { ...resume.skills };
    newSkills[group][idx] = value;
    setResume(prev => ({ ...prev, skills: newSkills }));
  };

  return (
    <form className="space-y-4">
      <h3 className="font-bold text-lg">Personal Info</h3>
      {["name", "email", "phone", "location"].map(field => (
        <div key={field}>
          <label className="block">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            className="border p-2 w-full"
            value={resume.personalInfo[field]}
            onChange={e => handleChange("personalInfo", field, e.target.value)}
          />
        </div>
      ))}
      <div>
        <label className="block">Links (comma separated)</label>
        <input
          className="border p-2 w-full"
          value={resume.personalInfo.links.join(", ")}
          onChange={e => handleChange("personalInfo", "links", e.target.value.split(",").map(s => s.trim()))}
        />
      </div>
      <div>
        <label className="block">Summary</label>
        <textarea
          className="border p-2 w-full"
          value={resume.summary}
          onChange={e => setResume(prev => ({ ...prev, summary: e.target.value }))}
        />
      </div>
      <h3 className="font-bold text-lg">Education</h3>
      {arrayField(
        "education",
        resume.education,
        arr => handleArrayChange("education", arr),
        [
          { name: "degree", label: "Degree" },
          { name: "school", label: "School" },
          { name: "year", label: "Year" }
        ]
      )}
      <h3 className="font-bold text-lg">Work Experience</h3>
      {arrayField(
        "workExperience",
        resume.workExperience,
        arr => handleArrayChange("workExperience", arr),
        [
          { name: "title", label: "Title" },
          { name: "company", label: "Company" },
          { name: "duration", label: "Duration" },
          { name: "description", label: "Description" }
        ]
      )}
      <h3 className="font-bold text-lg">Projects</h3>
      {arrayField(
        "projects",
        resume.projects,
        arr => handleArrayChange("projects", arr),
        [
          { name: "name", label: "Project Name" },
          { name: "description", label: "Description" }
        ]
      )}
      <h3 className="font-bold text-lg">Skills</h3>
      {Object.entries(resume.skills).map(([group, items]) => (
        <div key={group}>
          <label className="block">{group}</label>
          {items.map((item, idx) => (
            <input
              key={idx}
              className="border p-1 w-full mb-1"
              value={item}
              onChange={e => handleSkillChange(group, idx, e.target.value)}
            />
          ))}
        </div>
      ))}
      {["certifications", "awards", "languages", "interests"].map(section => (
        <div key={section}>
          <label className="block">{section.charAt(0).toUpperCase() + section.slice(1)} (comma separated)</label>
          <input
            className="border p-2 w-full"
            value={resume[section].join(", ")}
            onChange={e => setResume(prev => ({
              ...prev,
              [section]: e.target.value.split(",").map(s => s.trim())
            }))}
          />
        </div>
      ))}
    </form>
  );
}
