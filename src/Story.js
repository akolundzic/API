import moment from "moment";


const Story = function ({ post }) {
    return (
        <div className="story">
            <div >
                <h4>{post.title}</h4>
                <a href={post.url} target="_blank">{post.url}</a>
                <p>created at: {moment(post.created_at).fromNow()}</p>
                <p>author: {post.author}</p>
                <p>points: {post.points}</p>
            </div>

            <br />
            <hr />
            <br />
        </div>

    );
}

export default Story;