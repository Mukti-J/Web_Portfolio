import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
  delay?: number;
}

export function SkillBar({ skill, level, color = 'primary', delay = 0 }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          className={`h-2 rounded-full bg-gradient-to-r from-${color}-500 to-${color}-600`}
          style={{ width: `${level}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}