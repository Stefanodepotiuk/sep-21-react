import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/postServices";
import {Post} from "../../componenta";
import './POstPage.css'



const PostPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={'postPage'}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

            <Outlet/>
        </div>
    );
};

export {PostPage};