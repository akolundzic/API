import Story from "./Story";
import Spinner from "./Spinner";
import SvgComponent from "./SvgComponent";

const StoryList = function ({ posts, page, setPage }) {
    if (!posts) {
        return (
            <div className="StoryList">
                <Spinner />
            </div>
        )
    } else if (posts.length) {
        return (
            <div className="story-list">
                {
                    posts.map((post) => {
                        return <Story post={post} key={post.objectID} />
                    })
                }

                <div className="pagination">
                    <button>&lt;&lt;</button>
                    <p>page {page}</p>
                    <button>&gt;&gt;</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="StoryList">
                <SvgComponent />
            </div>
        )
    }

}

export default StoryList;