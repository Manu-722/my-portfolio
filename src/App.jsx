import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import { ThemeProvider } from "./Components/ThemeContext";
import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-all">
        <Navbar />
        <div className="flex justify-end p-4">
          <ThemeSwitcher />
        </div>
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
