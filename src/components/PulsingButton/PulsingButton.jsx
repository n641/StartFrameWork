import React, { useState } from 'react'

const PulsingButton = () => {
    const [isPulsing, setIsPulsing] = useState(false);
  
    const handleClick = () => {
      // Trigger the pulse animation
      setIsPulsing(true);
  
      // Remove the pulse animation after a short delay
      setTimeout(() => {
        setIsPulsing(false);
      }, 300); // Adjust the time to match the duration of the pulse animation
    };
  
    return (
      <button
        onClick={handleClick}
        className={`h-10 text-white rounded-lg self-start px-5 bg-[var(--thired-Color)] ${
          isPulsing ? "animate-pulse" : ""
        }`}
      >
        Send Message
      </button>
    );
  };

export default PulsingButton