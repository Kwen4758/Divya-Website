import arcadePic from "./arcade.jpeg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <button onClick={clickHandler}>Click me!</button>
      {open && <img src={arcadePic} className="main-pic" alt="Divs+Kev" />}
    </div>
  );
};

export default App;
