import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/ui/Navigation';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { UIUXPortfolio } from './components/sections/UIUXPortfolio';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <div className="relative w-full max-w-full">
          <Navigation />
          <ThemeToggle />
          <div className="w-full overflow-x-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/uiux-portfolio" element={<UIUXPortfolio />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;