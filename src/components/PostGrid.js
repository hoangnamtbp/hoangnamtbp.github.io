import Post from './Post';
import '../styles/PostGrid.css';

const PostGrid = ({posts}) => {
    return (
        <div className="post-grid">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
};

export default PostGrid;