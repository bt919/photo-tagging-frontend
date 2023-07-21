import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      console.log("anonymous");
      console.log(props.time);
    } else {
      console.log(name);
      console.log(props.time);
    }
    navigate("/leaderboard");
  };

  const handleSkip = () => {
    navigate("/leaderboard");
  };

  return (
    <div className="join">
      <h3>You found all five villains in {props.time} seconds!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="anonymous"
            value={name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <button type="submit">Join the ranks</button>
          <button type="button" onClick={handleSkip}>
            Not now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
