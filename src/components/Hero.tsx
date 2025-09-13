import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import TypingEffect from "./TypingEffect";

const Hero = () => (
  <header
    id="hero"
    className="relative z-10 w-screen min-h-screen flex items-center justify-center"
  >
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-8">


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-left"
      >

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Alesson Porfiro da Silva
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 h-20">
          <TypingEffect
            texts={[
              "Full-stack Web and App Developer",
              "+1 ano de experiência em programação",
            ]}
            speed={120}
            deleteSpeed={60}
            pause={1500}
          />
        </h2>


        <div className="flex items-center gap-6 mt-8">
          <a
            href="https://github.com/Alesson-porfiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/alesson-porfiro-017661336/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://www.instagram.com/alessonporfiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            <FaInstagram size={32} />
          </a>
        </div>


      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.img
          src="/wmremove-transformed.png"
          alt="Alesson Porfiro da Silva"
          className="w-100 h-100 md:w-96 md:h-96 rounded-full border-4 shadow-[0_0_25px_rgba(255,255,255,0.4)] animate-pulse"
          whileHover={{ scale: 1.07, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  </header>
);

export default Hero;
