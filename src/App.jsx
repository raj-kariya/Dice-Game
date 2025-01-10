import StartGame from "./components/StartGame";
import { useState } from "react";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      <StartGame/>
    </>
  )
}

export default App;
