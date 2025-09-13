import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Dashboard de Vendas",
    description:
      "Um dashboard analítico full stack com React no front-end e Spring Boot no back-end.",
    image: "/projetohover.png",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn/ui", "Spring boot", "Spring Security"],
    liveUrl: "https://github.com/Alesson-porfiro/fullstack-sales-dashboard-react-spring",
    githubUrl: "https://github.com/Alesson-porfiro/fullstack-sales-dashboard-react-spring",
  },
  {
    id: 2,
    title: "Kaudossie - Doceria Online",
    description:
      "Plataforma de e-commerce para uma doceria, com design responsivo e foco na experiência do usuário. Desenvolvido utilizando HTML, CSS e JavaScript puro.",
    image: "/projetodois.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://kaudossie.vercel.app/",
    githubUrl: "https://github.com/Alesson-porfiro/Kaudossie",
  },
  {
    id: 3,
    title: "Landing Page Psicóloga Thalita Santos",
    description:
      "Landing Page para uma psicóloga, com animaçoes fluidas, elementos responsivos e modernos que proporcionam uma experiencia limpa.",
    image: "/projetotres.png",
    tags: ["React", "TypeScript", "Tailwind", "Shadcn/ui"],
    liveUrl: "https://psicologa-thalita.vercel.app/",
    githubUrl: "https://github.com/Alesson-porfiro/Psic-loga-Thalita-React-project",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group flex flex-col shadow-lg"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)", // sombra roxa sutil
      }}
    >
      {/* Imagem */}
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-neutral-400 mb-4 flex-grow">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-purple-900/40 text-purple-300 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="mt-auto flex gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <FaExternalLinkAlt /> Ver Online
            </button>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <FaGithub /> GitHub
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="relative z-10 w-full py-24 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">🚀 Meus Projetos</h2>
        <p className="text-neutral-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Alguns dos projetos em que trabalhei. Explore o código no GitHub ou veja a versão online.
        </p>

        {/* Grid animado */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.25 }}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
