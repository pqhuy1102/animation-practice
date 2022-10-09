import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);
  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
