

function ResumePreview({ resume, theme }) {
  return (
    <div style={{ fontFamily: theme.font, color: theme.primaryColor }}>
      <h1 className="text-2xl font-bold">{resume.personalInfo.name}</h1>
      <p>{resume.personalInfo.email} | {resume.personalInfo.phone}</p>
      <p>{resume.personalInfo.location}</p>
      {/* Render other sections: summary, education, work, etc. */}
      
    </div>
  );
}

export default ResumePreview;