import { useEffect, useState } from "react";


const App = function () {

    const url = "http://hn.algolia.com/api/v1/search?tags=story";

    const [retrievedData, setRetrievedData] = useState(null);

    useEffect(() => {
        setTimeout(
            () => {
                fetch(url)
                    .then(resp => {
                        return resp.json();
                    })
                    .then(data => {
                        setRetrievedData(data["hits"]);
                    })
                    .catch(err => console.error("ERROR: " + err))
            }, 10)
    }, []);

    return (
        <div>
            <h1>Welcome!</h1>
            {
                !retrievedData ? <h2>LOADING...</h2> : <h2>DATA LOADED!!!</h2>  
            }
        </div>
    );
}

export default App;