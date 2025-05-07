import { useTheme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
