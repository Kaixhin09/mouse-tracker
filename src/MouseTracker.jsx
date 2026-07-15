import React, {useState, useEffect} from 'react';
import './App.css';

function MouseTracker() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      console.log(`Mouse move listener added`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log(`Mouse move listener removed`);
    };
  }, []);

  return (
    <div className="App">
      <h1>Mouse Tracker</h1>
      <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseTracker;