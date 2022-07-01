import React, { useEffect, useState } from "react";
import axios from "axios";
const moment = require("moment");
let time = moment("20111031", "YYYYMMDD").fromNow();

const GetData = ({ id }) => {
  // await axios.get(url, { params: { answer: 42 } });
  // url?params=answer, example: ...search?query=story
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  // const format = require("dateformat");
  console.log(`http://hn.algolia.com/api/v1/search?query=${id}`);

  useEffect(() => {
    setLoading(true);
    const fetchdata = () => {
      try {
        console.log();
        axios
          .get(`http://hn.algolia.com/api/v1/search?query=${id}`)
          .then((response) => response.data)
          .then((data) => {
            setItem(data.hits);
            // setMaintitle(data.hits[0]);
          });
      } catch (err) {
        if (err.response) {
          console.log("Error: " + err.message);
        }
      }
    };
    fetchdata();
    setLoading(false);
    // setTimeout(() => {
    //   console.log("This will run after 1 second!");
    // }, 1000);
  }, [id]);

  return (
    <div className="box">
      {/* if(loading){<div className=""></div>}
    else{ */}
      {item.map(
        ({ author, title, objectId, url, num_comments, created_at }) => (
          <div key={objectId}>
            <div id="ul">
              <h4>{title}</h4>
              <ul>
                <li>posted by {author}</li>
                <li> ago {moment({ created_at }).fromNow()} </li>
                <li> {num_comments} comments</li>
                <li>
                  <a href={url} target="_blank">
                    article-link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )
      )}

      {/* -----end map function ------------------*/}

      {/*--- end div  */}
    </div>
    // end render function
  );
};

export default GetData;
{
  /* // item.maps({ Id, author, created_at, title,num_comments, points })=>{ */
}
{
  /* // <div key={Id}>
    // <div id="ul">
      
    //     <h4>{title}</h4>
    //     <ul>
    //       <li>{points} points by</li>{item[0].points}
    //       <li>by {author}</li>
    //       <li>with {num_comments}</li>
    //       <li>on {created_at}</li>
    //     </ul>
    //   </div>
    // </div>
    // } */
}
{
  /* <div>
        {item ? (
          item.map((i) => {
            <div>
              <div>
                <h4>{i.title}</h4>
                <ul>
                  <li>{i.points} points by</li>
                  <li>by {i.author}</li>
                  <li>with {i.num_comments}</li>
                  <li>on {i.created_at}</li>
                </ul>
              </div>
            </div>;
          })
        ) : (
          <h2>Loading...</h2>
        )} */
}
{
  /* </div>  */
}
