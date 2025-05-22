
export default function TemplateSwitcher({ theme, setTheme }) {
  return (
    <div className="mb-2">
      <label className="mr-2">Template:</label>
      <select
        value={theme.template}
        onChange={e => setTheme(t => ({ ...t, template: Number(e.target.value) }))}
        className="border rounded px-2 py-1"
      >
        <option value={0}>Classic</option>
        <option value={1}>Modern</option>
      </select>
    </div>
  );
}