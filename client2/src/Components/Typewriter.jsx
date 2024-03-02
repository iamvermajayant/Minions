import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ lines, speed }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [maxHeight, setMaxHeight] = useState(0);
  const [finishedTyping, setFinishedTyping] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Calculate the maximum height of all lines
    const maxHeight = Math.max(...lines.map(line => line.length));
    setMaxHeight(maxHeight);

    // Start typing
    const typingInterval = setInterval(() => {
      if (!finishedTyping && currentLineIndex < lines.length) {
        if (!isHovering) {
          if (currentCharacterIndex < lines[currentLineIndex].length) {
            setDisplayText(prevText => prevText + lines[currentLineIndex][currentCharacterIndex]);
            setCurrentCharacterIndex(prevIndex => prevIndex + 1);
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setDisplayText("");
              setCurrentCharacterIndex(0);
              setCurrentLineIndex(prevIndex => (prevIndex + 1) % lines.length);
            }, 1000); // Delay before moving to the next line
          }
        }
      } else {
        clearInterval(typingInterval);
        setFinishedTyping(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [lines, speed, currentLineIndex, currentCharacterIndex, finishedTyping, isHovering]);

  return (
    <div
      className="typewriter"
      style={{ height: `${maxHeight}px` }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h1 className="text-white text-lg font-weight-bold">{displayText}</h1>
    </div>
  );
};

Typewriter.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number.isRequired,
};


export default Typewriter;
