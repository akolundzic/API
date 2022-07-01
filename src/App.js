import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GetData from "./components/GetData";
import Header from "./components/Header";
import Test from "./components/Test";

function App() {
  const [inputform, setInputform] = useState(""); //input search in header
  //const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputform(e.target.value);
  };
  const handleClick = (e) => e.preventDefault();

  return (
    <div>
      <Header
        handleChange={handleChange}
        inputform={inputform}
        hanhdleClick={handleClick}
        setInputform={setInputform}
      />

      <article>
        {/* <Test /> */}
        <GetData id={inputform} />
      </article>
    </div>
  );
}

export default App;
