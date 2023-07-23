import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Form from "./components/form";
import Leaderboard from "./components/leaderboard";

function App() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [villains, setVillains] = useState(new Array(5).fill(0));

  useEffect(() => {
    if (villains.indexOf(0) === -1) setEnd(Date.now());
  }, [villains]);

  const eliminateVillain = (index) => {
    setVillains((prev) => {
      return prev.map((villain, i) => {
        if (index === i) return 1;
        else return villain;
      });
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                villains={villains}
                eliminateVillain={eliminateVillain}
                setStart={setStart}
              ></Home>
            }
          ></Route>
          <Route
            path="/enter"
            element={<Form time={(end - start) / 1000}></Form>}
          ></Route>
          <Route
            path="/leaderboard"
            element={<Leaderboard></Leaderboard>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
