import React, { useEffect, useState } from "react";
import "./healthbar.css"

function Monster({ damage }) {
    const [progress, setProgress] = useState(100);
    const maxValue = 100
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevProgress - damage;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, [damage]);

    const currentValue = Math.round((progress / 100) * maxValue);

    const getBarColor = () => {
        if (progress > 50) {
          return "#4caf50";
        } else if (progress > 25) {
          return "#ffeb3b";
        } else {
          return "#f44336";
        }
      };
  
    return (
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ 
            width: `${progress}%`, 
            backgroundColor: getBarColor()
            }}>
            <span className="progress-text"> {currentValue} / {maxValue} </span>
        </div>
      </div>
    );
  }

export default Monster