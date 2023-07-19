import Dorian from "../images/dorian.webp";
import Yanagi from "../images/yanagi.webp";
import Doyle from "../images/doyle.webp";
import Spec from "../images/spec.webp";
import Sikorsky from "../images/sikorsky.webp";

const Header = () => {
  const images = [Dorian, Yanagi, Doyle, Spec, Sikorsky];
  const names = ["Dorian", "Yanagi", "Doyle", "Spec", "Sikorsky"];

  return (
    <div className="header">
      <h2>Find the following five villains</h2>
      {images.map((image, index) => {
        return (
          <div className="imageContainer" key={index}>
            <img
              src={image}
              alt={`${names[index]} from the anime Baki`}
              draggable="false"
            ></img>
            <p>{names[index]}</p>
            <p className="eliminate">X</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
