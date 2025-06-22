import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Palette, User, Briefcase, Code, Mail, FileText, LucideIcon } from 'lucide-react';

interface DockItemProps {
  item: {
    path: string;
    label: string;
    icon: LucideIcon;
    section: string | null;
  };
  mouseX: MotionValue<number>;
  isActive: boolean;
  onClick: () => void;
}

function DockItem({ item, mouseX, isActive, onClick }: DockItemProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Responsive sizing: smaller on mobile, larger on desktop
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const heightSync = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  return (
    <motion.div ref={ref} style={{ width, height }} className="flex items-end">
      <Link to={item.path} onClick={onClick} className="w-full h-full block relative group">
        <motion.div
          className={`w-full h-full rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />

          {/* Ripple effect */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-primary-300/50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          )}
        </motion.div>

        {/* Tooltip - Hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 text-sm font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
          style={{
            pointerEvents: 'none'
          }}
        >
          {item.label}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90 dark:border-t-gray-100/90" />
        </motion.div>

        {/* Active indicator dot */}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
          />
        )}
      </Link>
    </motion.div>
  );
}

export function Navigation() {
  const mouseX = useMotionValue(Infinity);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home, section: 'hero' },
    { path: '/#about', label: 'About', icon: User, section: 'about' },
    { path: '/#projects', label: 'Projects', icon: Briefcase, section: 'projects' },
    { path: '/#skills', label: 'Skills', icon: Code, section: 'skills' },
    { path: '/uiux-portfolio', label: 'UI/UX', icon: Palette, section: null },
    { path: '/#experience', label: 'Experience', icon: FileText, section: 'experience' },
    { path: '/#contact', label: 'Contact', icon: Mail, section: 'contact' },
  ];

    const handleNavClick = (item: typeof navItems[0]) => {
        if (item.section && location.pathname === '/') {
            // If we're on homepage and clicking a section, scroll to section or top
            setTimeout(() => {
                const element = document.getElementById(item.section!);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (item.section === 'hero') {
                    // Scroll to top if section is 'hero' or not found
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else if (item.path === '/') {
            // Always scroll to top when clicking Home
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    };

  const isActive = (item: typeof navItems[0]) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path === '/uiux-portfolio' && location.pathname === '/uiux-portfolio') return true;
    return false;
  };

  return (
    <div className="fixed bottom-2 sm:bottom-4 md:bottom-6 left-2 right-2 sm:left-4 sm:right-4 md:left-0 md:right-0 flex justify-center z-50 pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-end gap-1 sm:gap-2 bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white/20 dark:border-gray-700/30 shadow-2xl pointer-events-auto max-w-full overflow-x-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {navItems.map((item) => (
          <DockItem
            key={item.path}
            item={item}
            mouseX={mouseX}
            isActive={isActive(item)}
            onClick={() => handleNavClick(item)}
          />
        ))}
      </motion.div>

      {/* Reflection effect - Hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute top-full left-0 right-0 h-8 rounded-b-2xl opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          filter: 'blur(4px)',
          transform: 'scaleY(-1)',
        }}
      />
    </div>
  );
}
