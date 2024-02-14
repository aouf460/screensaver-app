import './App.scss';
import React, { useState, useEffect } from 'react';
import Screensaver from './components/ScreenSaver';
import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  const [showScreensaver, setShowScreensaver] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (event.button === 0 || event.button === 2) {
        setShowScreensaver(true);
        setIsVideoPlaying(true); // Ensure the video continues playing on mouse click
        window.open(
          'url'
        );
      }
    };

    // Add event listener to handle mousedown event
    window.addEventListener('mousedown', handleMouseDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div>
      <iframe
        title='whatever'
        src='url'
        width='100%'
        // style='aspect-ratio: 16/9; min-height: 340px;'
        frameborder='0'
        scrolling='no'
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        oallowfullscreen
        msallowfullscreen
      ></iframe>

    </div>
  );
}

export default App;
