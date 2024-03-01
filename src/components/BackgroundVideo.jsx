// BackgroundVideo.js

//import React from 'react';

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover" style={{ zIndex: '-1' }}>
      {/*<source src="/Summer_Flower_4K_Living_Background.mp4" type="video/mp4" />
      <source src="/In_the_Trees_4K_Living_Background.mp4" type="video/mp4" />
      <source src="/Fall_Forest_4K_Living_Background.mp4" type="video/mp4" />*/}
      <source src="/SunRaysinForest.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
