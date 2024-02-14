import React from 'react';
import video from '../assets/screensaver.mp4';

const ScreenSaverAnimated = () => {

        let videoSource = video;

    return (
      <div>
        <video
          src={videoSource}
          className='hid-box'
          width={window.width}
          height={window.height}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
}

export default ScreenSaverAnimated;