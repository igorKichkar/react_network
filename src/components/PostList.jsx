import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}> Post list</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id} remove={remove}/>
            )}
        </div>
    );
};

export default PostList;