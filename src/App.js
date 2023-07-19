import { useState } from "react";

import Home from "./components/home";

function App() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const beginClock = () => {
    setStart(new Date().getTime());
  };

  const endClock = () => {
    setEnd(new Date().getTime());
  };

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
