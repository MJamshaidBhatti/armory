import React, { useEffect, useState, forwardRef } from "react";
import { ReactTerminal } from "react-terminal";

const Terminal = forwardRef((props, ref) => {
  const [theme, setTheme] = useState("material-dark");
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    "Prepare for the cyber revolution.",
    "AI leads the way.",
    "Coming soon..."
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let currentLength = 0;
    let timer;

    const typeCharacters = () => {
      timer = setInterval(() => {
        if (typingForward) {
          setPrompt((prevPrompt) => currentMessage.substring(0, currentLength));
          currentLength++;
          if (currentLength > currentMessage.length) {
            clearInterval(timer);
            if (currentMessageIndex < messages.length - 1) {
              setTimeout(() => {
                setTypingForward(false);
              }, 1000);
            }
          }
        } else {
          setTimeout(() => {
            setPrompt((prevPrompt) => currentMessage.substring(0, currentMessage.length - currentLength));
            currentLength++;
            if (currentLength > currentMessage.length) {
              clearInterval(timer);
              if (currentMessageIndex < messages.length - 1) {
                setCurrentMessageIndex(currentMessageIndex + 1);
                setTypingForward(true);
              }
            }
          }, 100); // Delay before removing characters
        }
      }, 100);
    };

    // Adding a 1.5-second delay before starting typing
    setTimeout(() => {
      typeCharacters();
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, [typingForward, currentMessageIndex, messages]);

  return (
    <ReactTerminal
      ref={ref}
      prompt={prompt}
      theme={theme}
      style={{ width: "300px" }}
    />
  );
});

export default Terminal;
