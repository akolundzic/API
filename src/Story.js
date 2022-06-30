import moment from "moment";


const Story = function ({ post }) {
    return (
        <article className="story">
            <h4><a href={post.url} target="_blank">{post.title}</a></h4>
            <p>{post.points} points | posted {moment(post.created_at).fromNow()} by {post.author} | {post.num_comments} comments</p>
        </article>
    );
}

export default Story;