import { useState, useEffect } from "react";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        const response = await fetch("http://localhost:5000/player");
        const json = await response.json();
        setScores(json["message"]);
      } catch (err) {
        console.log(err);
      }
    };

    getScores();
  }, []);

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      {scores.map((score, index) => {
        return (
          <p key={index}>
            {index + 1}) {score["record"]["$numberDecimal"]} seconds by{" "}
            {score["name"]} on {new Date(score.date).toLocaleString()}
          </p>
        );
      })}
    </div>
  );
};

export default Leaderboard;
