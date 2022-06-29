import React, { useEffect } from "react";
import axios from "axios";
//using GetDat = async (inputform) => ?
const GetData = ({ id }) => {
  const axios = require("axios");
  // await axios.get(url, { params: { answer: 42 } });
  // url?params=answer, example: ...search?query=story
  //no await possible, even i took async fetchdata
  useEffect(() => {
    const fetchdata = (id) => {
      if (!id) {
        let story;
        id = story;
      }
      try {
        const res = axios({
          url: "http://hn.algolia.com/api/v1/search",
          method: "get",

          params: { query: id },
          headers: {
            "Content-Type": "application/json",
          },
        });

        res
          .then((response) => response.data)
          .then((data) => {
            console.log(data.hits);
          });

        // console.log("Try");
      } catch (err) {
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          console.log("Error: " + err.message);
        }
      }
    };
    fetchdata(id);
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default GetData;
