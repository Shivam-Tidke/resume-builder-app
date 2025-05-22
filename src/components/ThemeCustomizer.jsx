


export default function ThemeCustomizer({ theme, setTheme, fonts }) {
  return (
    <div className="mb-4 flex gap-4 items-center flex-wrap">
      <label>Mode:</label>
      <button
        onClick={() => setTheme(t => ({ ...t, mode: t.mode === "light" ? "dark" : "light" }))}
        className="px-2 py-1 border rounded"
      >
        {theme.mode === "light" ? "🌞" : "🌙"}
      </button>
      <label>Primary Color:</label>
      <input
        type="color"
        value={theme.primaryColor}
        onChange={e => setTheme(t => ({ ...t, primaryColor: e.target.value }))}
        className="w-8 h-8 p-0 border-none"
      />
      <label>Font:</label>
      <select
        value={theme.font}
        onChange={e => setTheme(t => ({ ...t, font: e.target.value }))}
        className="border rounded px-2 py-1"
      >
        {fonts.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
      </select>
    </div>
  );
}