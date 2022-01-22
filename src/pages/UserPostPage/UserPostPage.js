import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './UserPostPage.css';
import {postService} from "../../services/postServices";


const UserPostPage = () => {

    const {id} = useParams();
    const [posts, setPosts] = useState([null]);

    useEffect(() => {
        postService.getById(id).then(value => setPosts({...value}))
    }, [])

    return (
        <div>

            {posts &&
            <div className={'posts'}>

                <h2>Post</h2>
                <div>Id : {posts.id}</div>
                <div>Title : {posts.title}</div>
                <div>Body : {posts.body}</div>

            </div>
            }

        </div>
    );
};

export {UserPostPage};