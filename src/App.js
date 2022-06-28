import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Test from "./components/Test";

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
      <header>
        <nav>
          <ul className="menu">
            <li>
              <a id="a" href="#">
                Home
              </a>
            </li>
            <li>
              <a id="a" href="#">
                Stories
              </a>
            </li>
            <li>
              <a id="a" href="#">
                News
              </a>
            </li>
            <li>
              <a id="a" href="#">
                Contact
              </a>
            </li>
            <li>
              <form>
                {/* <UserContext.Provider value={inputform.value}> */}
                <input
                  id="input"
                  type="text"
                  placeholder="Search..."
                  value={inputform}
                  onChange={handleChange}
                />
                {/* </UserContext.Provider> */}
              </form>
            </li>
            <li>
              <button id="inputbutton" onClick={handleClick} type="submit">
                <i className="fa fa-plus  inpuntbutton">Search</i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Test inputform={inputform} />
      <article></article>
    </div>
  );
}

export default App;
