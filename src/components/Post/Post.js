import React from 'react';
import './Post.css'

const Post = ({post: {id, userId, title, body}}) => {

    return (
        <div className={'postStyle'}>
            <div>Id : {id}</div>
            <div>UserId : {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;