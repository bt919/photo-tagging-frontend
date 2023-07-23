import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.time) navigate("/");
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: "anonymous", record: props.time }),
      };
      await fetch(
        "https://photo-tagging-api-production.up.railway.app/player",
        options
      );
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, record: props.time }),
      };
      await fetch(
        "https://photo-tagging-api-production.up.railway.app/player",
        options
      );
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
            placeholder="Enter as anonymous"
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
