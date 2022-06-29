import React, { useEffect, useState } from "react";
import Display from "./Display";
import axios from "axios";

const GetData = ({ id }) => {
  // await axios.get(url, { params: { answer: 42 } });
  // url?params=answer, example: ...search?query=story
  const [item, setItem] = useState();
  const [query, setQuery] = useState(id);

  const fetchdata = () => {
    if (!query) {
      setQuery("story");
    }
    try {
      const res = axios({
        url: "http://hn.algolia.com/api/v1/search",
        method: "get",
        timeout: 1000,
        params: { query: { query } },
        headers: {
          "Content-Type": "application/json",
        },
      });
      res
        .then((response) => response.data)
        .then((data) => {
          setItem(data.hits);
        });
      return setItem;
    } catch (err) {
      if (err.response) {
        console.log("Error: " + err.message);
      }
    }
  };

  useEffect(() => {
    fetchdata();

    // setTimeout(() => {
    //   console.log("This will run after 1 second!");
    // }, 1000);
    console.log("Call");
  }, []);
  console.log(item);
  //item[i].author,item[i].title,item[i].num_comments,item[i].point
  return (
    <div id="ul">
      <>
        <h4>{item[0].title}</h4>
        <ul>
          <li>{item[0].points} points</li>
          <li>by {item[0].author}</li>
          <li>{item[0].num_comments} comments</li>
        </ul>
      </>
    </div>
  );
};

export default GetData;
