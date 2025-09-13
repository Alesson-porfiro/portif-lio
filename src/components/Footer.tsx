import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer
    id="contact"
    className="relative z-10 w-full py-20 px-8 text-center "
  >
    <div className="max-w-5xl mx-auto">
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Vamos Conversar!
      </h2>

      {/* Texto */}
      <p className="text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
        Estou sempre aberto a novas oportunidades, colaborações e bons papos
        sobre tecnologia. 🚀
      </p>

      {/* Botão */}
      <a
        href="https://wa.me/11970338992"
        className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg py-3 px-10 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/20 mb-12"
      >
        Mande uma mensagem
      </a>

      {/* Redes Sociais */}
      <div className="flex justify-center items-center gap-8 mb-10">
        <a
          href="https://github.com/Alesson-porfiro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-all transform hover:scale-125"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/alesson-porfiro-017661336/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-blue-500 transition-all transform hover:scale-125"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/alessonporfiro/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-pink-500 transition-all transform hover:scale-125"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Direitos autorais */}
      <p className="text-neutral-600 text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-neutral-400 font-medium">
          Alesson Porfiro da Silva
        </span>
        . Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
