import logo from "./logo.svg";
import "./App.css";
import WholeWeb from "./components/WholeWeb";
import Splashscreen from "./components/Splashscreen";
import { useState,useEffect } from "react";

function App() {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(false);
    }, 3000);
    setShowScreen(true);
  }, []);


  return (
    <>{showScreen? <Splashscreen /> : <WholeWeb className="scroll-smooth" />}</>
  );
}

export default App;
