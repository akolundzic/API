import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GetData from "./components/GetData";
import Header from "./components/Header";
import Display from "./components/Display";

const APIURL = "http://hn.algolia.com/api/v1/search?query=story";

function App() {
  const [inputform, setInputform] = useState(""); //input search in header
  const [errormessage, setErrorMessage] = useState(""); //set error message
  let story;
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
        <GetData id={story} />
        <Display />
      </article>
    </div>
  );
}

export default App;
