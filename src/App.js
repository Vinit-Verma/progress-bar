import Progressbar from "./components/Progressbar";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 300);
  }, [value]);

  return (
    <div className="app">
      <span>My progress bar in React</span>
      <Progressbar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <psan>{success ? "Loaded" : "...isLoading"}</psan>
    </div>
  );
}

export default App;
