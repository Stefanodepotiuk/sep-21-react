import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentsService} from "../../services/comment.service";

const PostCommentsPage = () => {

    const {id} = useParams();
    const [comments, setComments] = useState([null]);

    useEffect(() => {
        commentsService.getById(id).then(value => setComments({...value}))
    }, [])

    return (
        <div>

            {comments &&
            <div className={'posts'}>

                <h2>Post</h2>
                <div>Id : {comments.id}</div>
                <div>Name : {comments.name}</div>
                <div>Email : {comments.email}</div>
                <div>Body : {comments.body}</div>

            </div>
            }

        </div>
    );
};

export {PostCommentsPage};