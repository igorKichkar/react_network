import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Posts not found</h1>
        )
    }
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