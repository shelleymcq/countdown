import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <>
      {seconds <= 0 ? (
        <p className="done">Time's Up!</p>
      ) : (
        <p className="remain">{seconds} seconds remain...</p>
      )}
    </>
  );
}

export default App;
