import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

import {postServices} from "../../services/post.services";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postServices.getyUserId(userId).then(value => setPosts(value))
    }, [userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;