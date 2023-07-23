import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "../images/background.png";

const Background = (props) => {
  const [ready, setReady] = useState(false);
  const villains = ["Dorian", "Yanagi", "Doyle", "Spec", "Sikorsky"];
  const navigate = useNavigate();

  useEffect(() => {
    if (props.villains.indexOf(0) === -1) navigate("/enter");
  }, [props.villains]);

  const handleClick = () => {
    setReady(true);
    props.setStart(Date.now());
  };

  const handleImageClick = async (e) => {
    const x =
      (e.clientX - e.target.getBoundingClientRect().left) /
      e.target.offsetWidth;
    const y =
      (e.clientY - e.target.getBoundingClientRect().top) /
      e.target.offsetHeight;

    const response = await fetch(
      `http://localhost:5000/coordinate?x=${x}&y=${y}`
    );
    const json = await response.json();

    if (json["name"]) {
      props.eliminateVillain(villains.indexOf(json["name"]));
    }
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
