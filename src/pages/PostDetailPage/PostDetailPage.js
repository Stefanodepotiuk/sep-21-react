import React, {useEffect, useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

import {postService} from "../../services/postServices";
import './PostDetailPage.css'

const PostDetailPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState([null]);
    const navigate = useNavigate();

    useEffect(() => {
        postService.getById(id).then(value => setPost({...value}))
    }, [])

    const back = () => {
        navigate(-1);
    }

    return (
        <div>

            {post &&
            <div className={'postDetail'}>

                <h2>Post Details</h2>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Title: {post.body}</div>

                <Link to='comments'>
                    <button>comments</button>
                </Link>

                <button onClick={back} className={'beak'}>beak</button>

            </div>
            }

            <Outlet/>

        </div>
    );
};

export {PostDetailPage};