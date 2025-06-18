import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  glass = false,
  onClick 
}: CardProps) {
  const baseClasses = `
    rounded-2xl p-6 transition-all duration-300
    ${glass 
      ? 'glass dark:glass-dark' 
      : 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl'
    }
    ${hover ? 'card-hover cursor-pointer' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `;

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
    >
      {children}
    </motion.div>
  );
}