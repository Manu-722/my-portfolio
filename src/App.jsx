import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul className="flex gap-4 p-4 bg-gray-100">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/footer">Footer</Link></li>
          </ul>
        </nav>
      </header>

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>

      <footer className="text-center p-4 bg-gray-200 mt-8">
        <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
