import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-32 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">
          [Tu Nombre Aquí]
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl">
          Full Stack Developer | JavaScript | React | Node.js
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard title="Proyecto 1" description="Descripción breve del proyecto." link="#" />
          <ProjectCard title="Proyecto 2" description="Descripción breve del proyecto." link="#" />
          <ProjectCard title="Proyecto 3" description="Descripción breve del proyecto." link="#" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Aquí puedes escribir una breve biografía profesional, tus intereses y tus skills más fuertes.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="mb-4">Puedes escribirme a: <span className="font-semibold">tuemail@ejemplo.com</span></p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-indigo-600 hover:underline">GitHub</a>
          <a href="#" className="text-indigo-600 hover:underline">LinkedIn</a>
          <a href="#" className="text-indigo-600 hover:underline">Descargar CV</a>
        </div>
      </section>
    </div>
  );
}
