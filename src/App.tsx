import { ThemeToggle } from './components/ui/ThemeToggle';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;