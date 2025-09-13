import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Habilidades = () => (
  <footer
    id="contact"
    className="relative w-full py-20 px-6 text-center overflow-hidden bg-black"
  >
    {/* Fundo animado de partículas neon */}
    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-black -z-10"></div>
    <div className="absolute inset-0 -z-20">
      {/* Aqui você pode adicionar um canvas ou SVG de partículas animadas */}
      <div className="w-full h-full bg-[url('/particles-glow.png')] bg-cover bg-center opacity-20 animate-fadeIn"></div>
    </div>

    <div className="relative max-w-5xl mx-auto z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
        Vamos Conversar!
      </h2>
      <p className="text-gray-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Entre em contato para agendar uma sessão ou trocar ideias. Estou aberto a novas oportunidades e colaborações.
      </p>

      {/* Botão neon com animação */}
      <motion.a
        href="mailto:seu-email@exemplo.com"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #8b5cf6, 0 0 40px #6366f1" }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold text-lg py-3 px-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mb-12"
      >
        Mande um Email
      </motion.a>

      {/* Ícones sociais neon */}
      <div className="flex justify-center items-center gap-10 mb-10">
        {[
          { href: "https://github.com/Alesson-porfiro", icon: <FaGithub /> },
          { href: "https://linkedin.com/in/alesson-porfiro-da-silva", icon: <FaLinkedin /> },
          { href: "https://www.instagram.com/alessonporfiro/", icon: <FaInstagram /> },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.3, rotate: 15, textShadow: "0 0 10px #8b5cf6, 0 0 20px #6366f1" }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-300 hover:text-white transition-colors text-3xl"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      <p className="text-gray-500 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Alesson Porfiro da Silva. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Habilidades;
