import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "../images/background.png";

const Background = (props) => {
  const [ready, setReady] = useState(false);
  const coordinates = [
    [0.43, 0.82],
    [0.84, 0.81],
    [0.72, 0.12],
    [0.66, 0.58],
    [0.07, 0.65],
  ];
  const villains = ["Dorian", "Yanagi", "Doyle", "Spec", "Sikorsky"];
  // const doyle = [0.72, 0.12];
  // const dorian = [0.43, 0.82];
  // const yanagi = [0.84, 0.81];
  // const spec = [0.66, 0.58];
  // const sikorsky = [0.07, 0.65];
  const navigate = useNavigate();

  useEffect(() => {
    if (props.villains.indexOf(0) === -1) navigate("/enter");
  }, [props.villains]);

  const handleClick = () => {
    setReady(true);
    props.setStart(Date.now());
    console.log(Date.now());
  };

  const handleImageClick = (e) => {
    const x =
      (e.clientX - e.target.getBoundingClientRect().left) /
      e.target.offsetWidth;
    const y =
      (e.clientY - e.target.getBoundingClientRect().top) /
      e.target.offsetHeight;
    coordinates.forEach((point, index) => {
      if (
        x >= point[0] - 0.02 &&
        x <= point[0] + 0.02 &&
        y >= point[1] - 0.02 &&
        y <= point[1] + 0.02
      ) {
        console.log({ point, index });
        props.eliminateVillain(index);
      }
    });
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
        <button onClick={handleClick}>Click here to start playing</button>
      )}
    </div>
  );
};

export default Background;
