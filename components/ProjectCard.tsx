import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">
        Ver más →
      </a>
    </motion.div>
  );
}
