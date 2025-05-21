
function TemplateSwitcher({ theme, setTheme }) {
  return (
    <div className="mb-2">
      <label>Template:</label>
      <select
        value={theme.template}
        onChange={e => setTheme(t => ({ ...t, template: Number(e.target.value) }))}
      >
        <option value={0}>Classic</option>
        <option value={1}>Modern</option>
      </select>
    </div>
  );
}

export default TemplateSwitcher;