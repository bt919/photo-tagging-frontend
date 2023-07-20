import { useState, useEffect } from "react";

import Home from "./components/home";

function App() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [villains, setVillains] = useState(new Array(5).fill(0));

  useEffect(() => {
    console.log({ villains });
  }, [villains]);

  const eliminateVillain = (index) => {
    setVillains();
  };

  const beginClock = () => {
    setStart(new Date().getTime());
  };

  const endClock = () => {
    setEnd(new Date().getTime());
  };

  return (
    <div className="App">
      <Home villains={villains} eliminateVillain={eliminateVillain}></Home>
    </div>
  );
}

export default App;
