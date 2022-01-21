import React , {useEffect, useState} from 'react'

import {postServices} from "../../services/posts.services";
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";
import './PostPage.css'

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postServices.getAll().then(value => setPosts([...value]));
    }, [])

    return (
        <div className={'postPage'}>
            <div><h2>Posts</h2>
                {posts.map(post => <Post key={post.id} post={post}/>)}</div>

            <div className={'info'}><Outlet/></div>
        </div>
    );
};

export default PostsPage;