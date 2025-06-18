import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, DatabaseZap, Brain, Network, Palette } from 'lucide-react';
import { Card } from '../ui/Card';

const skills = [
	{
		icon: Code2,
		title: 'Frontend Development',
		color: 'from-blue-500 to-cyan-500',
		description:
			'Crafting beautiful, responsive, and performant user interfaces with modern web technologies.',
	},
	{
		icon: Server,
		title: 'Backend Development',
		color: 'from-green-500 to-emerald-500',
		description:
			'Building robust, scalable, and secure server-side applications and APIs.',
	},
	{
		icon: DatabaseZap,
		title: 'Database & Storage',
		color: 'from-purple-500 to-pink-500',
		description:
			'Managing and optimizing data solutions for performance, reliability, and scalability.',
	},
	{
		icon: Brain,
		title: 'AI & Machine Learning',
		color: 'from-teal-500 to-blue-500',
		description:
			'Developing intelligent systems by leveraging AI and machine learning models.',
	},
	{
		icon: Network,
		title: 'Network Engineering',
		color: 'from-orange-500 to-red-500',
		description:
			'Designing, implementing, and maintaining secure and efficient network infrastructures.',
	},
	{
		icon: Palette,
		title: 'UI/UX Design',
		color: 'from-indigo-500 to-purple-500',
		description:
			'Creating intuitive, accessible, and visually appealing user experiences and designs.',
	},
];

const TiltedCard = ({ children, variants, custom }: { children: React.ReactNode, variants: Variants, custom: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
		<motion.div
			variants={variants}
			custom={custom}
			style={{ perspective: '1000px' }}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="h-full"
		>
			<motion.div
				style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
				whileHover={{ scale: 1.05 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				className="h-full"
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
			},
		},
	};

	return (
		<section
			className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
			id="skills"
		>
			<motion.div
				ref={ref}
				className="max-w-7xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
			>
				<motion.div
					variants={itemVariants}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Core{' '}
						<span className="gradient-text">Competencies</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
						I possess a versatile skill set that spans across various
						domains of technology and design.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{skills.map((skill, index) => (
						<TiltedCard
							key={skill.title}
							variants={itemVariants}
							custom={index}
						>
							<Card
								glass
								className="h-full p-8 flex flex-col justify-start text-left"
							>
								<div className="flex items-center mb-5">
									<div
										className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} p-3.5 mr-5 shadow-lg flex-shrink-0`}
									>
										<skill.icon className="w-full h-full text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
										{skill.title}
									</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-400 leading-relaxed">
									{skill.description}
								</p>
							</Card>
						</TiltedCard>
					))}
				</div>
			</motion.div>
		</section>
	);
}