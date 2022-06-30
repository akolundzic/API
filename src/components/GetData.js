import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData = ({ id }) => {
  // await axios.get(url, { params: { answer: 42 } });
  // url?params=answer, example: ...search?query=story
  const [item, setItem] = useState([]);
  const [query, setQuery] = useState(id);
  const [maintitle, setMaintitle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      if (!query) {
        setQuery("story");
      }
      try {
        const res = await axios({
          url: "http://hn.algolia.com/api/v1/search",
          method: "get",
          timeout: 1000,
          params: { query: { query } },
          headers: {
            "Content-Type": "application/json",
          },
        });
        await res
          .then((response) => response.data)
          .then((data) => {
            setItem(data.hits);
            setMaintitle(data.hits[0]);
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
  }, []);
  console.log(item);
  console.log(query);
  //item[i].author,item[i].title,item[i].num_comments,item[i].point
  //date: format(new Date(item[i].created_at),'dd MMMM yyyy');
  return (
    <div>
      <div>
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
        )}
      </div>
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
