// src/components/TypingEffect.tsx
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];   // Lista de frases
  speed?: number;    // Velocidade de digitar
  deleteSpeed?: number; // Velocidade de apagar
  pause?: number;    // Pausa antes de apagar
  cursor?: boolean;  // Mostrar cursor
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pause = 1500,
  cursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // Digitando
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      // Pausa antes de apagar
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      // Apagando
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Vai para o próximo texto
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts, textIndex, speed, deleteSpeed, pause]);

  // Cursor piscando
  useEffect(() => {
    if (cursor) {
      const interval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [cursor]);

  return (
    <span>
      {displayedText}
      {cursor && <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>}
    </span>
  );
};

export default TypingEffect;
