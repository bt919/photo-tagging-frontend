import { useState } from "react";

import background from "../images/background.png";

const Background = () => {
  const [ready, setReady] = useState(false);

  const handleClick = () => {
    setReady(true);
  };

  const handleImageClick = (e) => {
    const screenX = e.screenX;
    const screenY = e.screenY;
    const clientX = e.clientX;
    const clientY = e.clientY;
    console.log({ screenX, screenY, clientX, clientY });
  };

  return (
    <div className="background">
      {ready ? (
        <img
          onClick={(e) => handleImageClick(e)}
          src={background}
          alt="Find the five villains here"
          draggable="false"
        ></img>
      ) : (
        <button onClick={handleClick}>
          Click to start timer and start playing
        </button>
      )}
    </div>
  );
};

export default Background;
