import { useEffect, useState } from "react";

export const useTypewriter = (
  text: string,
  speed = 50 // slower default
) => {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    setDisplayText("");

    let i = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {

      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i < text.length) {

        const randomSpeed = speed + Math.random() * 80;

        timeout = setTimeout(type, randomSpeed);

      }

    };

    type();

    return () => clearTimeout(timeout);

  }, [text, speed]);

  return displayText;

};