import { useState } from "react";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      <p>1) 2.234 seconds by Bob on July 2, 2023</p>
      <p>2) 2.234 seconds by Bob on July 2, 2023</p>
      <p>3) 2.234 seconds by Bob on July 2, 2023</p>
      <p>4) 2.234 seconds by Bob on July 2, 2023</p>
      {scores.map((score, index) => {
        return (
          <p key={index}>
            {index}. {score.score} by {score.name} on {score.date}
          </p>
        );
      })}
    </div>
  );
};

export default Leaderboard;
