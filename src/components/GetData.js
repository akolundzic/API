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
      console.log(id);
      // if (!query) {
      //   setQuery("story");
      // }

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
    // setTimeout(() => {
    //   console.log("This will run after 1 second!");
    // }, 1000);
  }, [id]);
  // console.log(item);
  //item[i].author,item[i].title,item[i].num_comments,item[i].point
  //date: format(new Date(item[i].created_at),'dd MMMM yyyy');
  // const usersinfo = users.map(info =>
  //   <li key={person.id}>{person.name}</li>)
  return (
    <div>
      {/* {loading}?(<h1>loading ..</h1>):(<h1>notLoading...</h1>) */}
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
    </div>
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
