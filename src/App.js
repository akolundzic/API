import { useEffect, useState } from "react";
import StoryList from "./StoryList";
import SearchForm from "./SearchForm";

const App = function () {

    const [page, setPage] = useState(1);
    const [url, setUrl] = useState("http://hn.algolia.com/api/v1/search?tags=front_page");
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setPosts(data.hits)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <div className="app">
            <h1>
                <span className="green-font">Welcome to Hacker News</span>
            </h1>
            <SearchForm setPosts={setPosts} />
            <StoryList posts={posts} page={page} setPage={setPage} />
        </div>
    );
}

export default App;