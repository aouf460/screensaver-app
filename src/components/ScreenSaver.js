import React, { useState } from 'react';
import video from '../assets/screensaver.mp4';

const Screensaver = ({ screensaverChoice }) => {
  const [isVisible, setIsVisible] = useState(true);


  // Determine the video source based on screensaverChoice
    let videoSource = video;

  return isVisible ? (
    <video
    //   onClick={hideScreensaver}
      src={videoSource}
      className='screen-saver'
      width={window.width}
      height={window.height}
      autoPlay
      loop
      muted
      playsInline
    />
  ) : null;
};

export default Screensaver;
