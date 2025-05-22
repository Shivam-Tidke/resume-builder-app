export default function ResumePreview({ resume, theme }) {
  const { personalInfo, summary, education, workExperience, projects, skills, certifications, awards, languages, interests } = resume;

  // Two template variants
  if (theme.template === 1) {
    // Modern Template
    return (
      <div style={{fontFamily: theme.font, color: theme.primaryColor}}>
        <div className="flex items-center justify-between border-b pb-2 mb-2">
          <div>
            <h1 className="text-2xl font-bold">{personalInfo.name}</h1>
            <div className="text-xs">{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</div>
          </div>
          <div>
            {personalInfo.links && personalInfo.links.map(link => (
              <a key={link} href={link} className="text-xs underline block">{link}</a>
            ))}
          </div>
        </div>
        <div className="mb-2 italic">{summary}</div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h2 className="font-semibold">Education</h2>
            {education.map((edu, idx) => (
              <div key={idx} className="text-sm">{edu.degree}, {edu.school} ({edu.year})</div>
            ))}
            <h2 className="font-semibold mt-2">Skills</h2>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="text-sm">
                <span className="font-bold">{group}:</span> {items.join(", ")}
              </div>
            ))}
            <h2 className="font-semibold mt-2">Languages</h2>
            <div className="text-sm">{languages.join(", ")}</div>
          </div>
          <div>
            <h2 className="font-semibold">Work Experience</h2>
            {workExperience.map((job, idx) => (
              <div key={idx} className="text-sm mb-1">
                <span className="font-bold">{job.title}</span> at {job.company} ({job.duration})
                <div>{job.description}</div>
              </div>
            ))}
            <h2 className="font-semibold mt-2">Projects</h2>
            {projects.map((proj, idx) => (
              <div key={idx} className="text-sm">
                <span className="font-bold">{proj.name}</span>: {proj.description}
              </div>
            ))}
            <h2 className="font-semibold mt-2">Certifications</h2>
            <div className="text-sm">{certifications.join(", ")}</div>
            <h2 className="font-semibold mt-2">Awards</h2>
            <div className="text-sm">{awards.join(", ")}</div>
            <h2 className="font-semibold mt-2">Interests</h2>
            <div className="text-sm">{interests.join(", ")}</div>
          </div>
        </div>
      </div>
    );
  }

  // Classic Template
  return (
    <div style={{fontFamily: theme.font, color: theme.primaryColor}}>
      <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
      <div className="text-sm text-gray-500 mb-2">
        {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
      </div>
      <div className="mb-4">{personalInfo.links && personalInfo.links.map(link => (
        <a key={link} href={link} className="text-blue-600 underline mr-2">{link}</a>
      ))}</div>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Summary</h2>
        <p>{summary}</p>
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Education</h2>
        {education && education.map((edu, idx) => (
          <div key={idx}>
            <span className="font-bold">{edu.degree}</span>, {edu.school} ({edu.year})
          </div>
        ))}
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Work Experience</h2>
        {workExperience && workExperience.map((job, idx) => (
          <div key={idx}>
            <span className="font-bold">{job.title}</span> at {job.company} ({job.duration})
            <div>{job.description}</div>
          </div>
        ))}
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Projects</h2>
        {projects && projects.map((proj, idx) => (
          <div key={idx}>
            <span className="font-bold">{proj.name}</span>: {proj.description}
          </div>
        ))}
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Skills</h2>
        {skills && Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <span className="font-bold">{group}:</span> {items.join(", ")}
          </div>
        ))}
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Certifications</h2>
        <div>{certifications && certifications.join(", ")}</div>
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Awards</h2>
        <div>{awards && awards.join(", ")}</div>
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Languages</h2>
        <div>{languages && languages.join(", ")}</div>
      </section>
      <section className="mb-4">
        <h2 className="font-semibold text-lg">Interests</h2>
        <div>{interests && interests.join(", ")}</div>
      </section>
    </div>
  );
}