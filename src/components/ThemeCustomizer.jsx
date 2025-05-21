

function ThemeCustomizer({ theme, setTheme }) {
  return (
    <div className="mb-4 flex gap-2 items-center">
      <label>Mode:</label>
      <button onClick={() => setTheme(t => ({ ...t, mode: t.mode === "light" ? "dark" : "light" }))}>
        {theme.mode === "light" ? "🌞" : "🌙"}
      </button>
      <label>Primary Color:</label>
      <input
        type="color"
        value={theme.primaryColor}
        onChange={e => setTheme(t => ({ ...t, primaryColor: e.target.value }))}
      />
      <label>Font:</label>
      <select value={theme.font} onChange={e => setTheme(t => ({ ...t, font: e.target.value }))}>
        <option>Roboto</option>
        <option>Merriweather</option>
        <option>Montserrat</option>
      </select>
    </div>
  );
}

export default ThemeCustomizer;