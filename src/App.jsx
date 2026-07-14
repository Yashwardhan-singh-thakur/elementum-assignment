import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ fontSize: "80px", fontWeight: 400 }}>
        The thinkers and doers
      </h1>
    </div>
  );
}

export default App;
