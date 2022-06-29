import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Test from "./components/Test";
import Header from "./components/Header";

const API_URL = "http://hn.algolia.com/api/v1/search?query=";

function App() {
  const [inputform, setInputform] = useState(""); //input search in header
  const [data, setData] = useState(null); //transfer data and handler to header
  const handleChange = (e) => {
    setInputform(e.target.value);
  };

  const handleClick = (e) => e.preventDefault();
  let stringselection = "story";
  return (
    <div>
      <Header
        handleChange={handleChange}
        inputform={inputform}
        hanhdleClick={handleClick}
        setInputform={setInputform}
      />
      <Test inputform={inputform} />
      <article></article>
    </div>
  );
}

export default App;
