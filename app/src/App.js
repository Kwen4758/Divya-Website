import arcadePic from "./arcade.jpeg";
import "./App.css";
import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA7w4om2O2PLje6WC6qTtzpY7DNDPxHat8",
  authDomain: "divs-website.firebaseapp.com",
  projectId: "divs-website",
  storageBucket: "divs-website.appspot.com",
  messagingSenderId: "189509095956",
  appId: "1:189509095956:web:6f3d18da9e9298e3ac0d01",
  measurementId: "G-G7EPLFCHBY",
};

const app = initializeApp(firebaseConfig);

const App = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <app>
      <div className="App">
        <button onClick={clickHandler}>Click me!</button>
        {open && <img src={arcadePic} className="main-pic" alt="Divs+Kev" />}
      </div>
    </app>
  );
};

export default App;
