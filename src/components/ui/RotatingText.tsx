"use client";
import React, { useState, useEffect } from "react";

interface RotatingTextProps {
  phrases: string[];
  typingSpeed?: number;
  pauseTime?: number;
  deletingSpeed?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  phrases,
  typingSpeed = 100,
  pauseTime = 1500,
  deletingSpeed = 50,
}) => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentPhrase.slice(0, prev.length + 1));
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phrases, phraseIndex, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="text-gradient">{text}|</span>
  );
};

export default RotatingText;
