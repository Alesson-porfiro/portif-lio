import { motion } from "framer-motion";

const skills = [
  {
    title: "💻 Linguagens de Programação",
    icons: "java,spring,javascript,typescript,python",
    iconUrl:
      "https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Programming_Languages.gif?raw=true",
  },
  {
    title: "🌐 Desenvolvimento Web",
    icons: "html,css,js,ts,react,bootstrap,jquery,vite",
  },
  {
    title: "🗄️ Bancos de Dados",
    icons: "postgres,mysql,mongodb,sqlite,dynamodb",
  },
  {
    title: "☁️ Cloud & DevOps",
    icons: "aws,azure,docker,vercel,",
  },
  {
    title: "⚙️ Ferramentas & Plataformas",
    icons: "git,github,gitlab,postman,vscode,notion,windows,linux",
  },
];

const About = () => (
  <section id="about" className="relative z-10 w-full py-24 px-6 ">
    <div className="max-w-6xl mx-auto text-center">
      
      {/* Título */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-text-fade">
        Sobre Mim
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mb-20 max-w-3xl mx-auto leading-relaxed">
        Sou um desenvolvedor apaixonado por criar soluções tecnológicas que resolvem problemas do mundo real. Do back-end robusto ao front-end interativo, estou sempre em busca de novos desafios e aprendizados. 🚀
      </p>

      {/* Habilidades */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl font-bold mb-12 text-center text-white">
          Minhas Habilidades
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900/70 border border-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
                {skill.iconUrl && (
                  <img
                    src={skill.iconUrl}
                    width="36"
                    alt="Ícone da categoria"
                    className="rounded-full border-2 border-purple-500 shadow-sm"
                  />
                )}
                {skill.title}
              </h4>

              <a
                href="https://skillicons.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={`https://skillicons.dev/icons?i=${skill.icons}&perline=6`}
                  alt={skill.title}
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
