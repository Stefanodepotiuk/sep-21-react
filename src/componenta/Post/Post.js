import React from 'react';
import {Link} from "react-router-dom";

import './Post.css';


const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>

            <div className={'postStyle'}>

                <Link to={id.toString()}>
                    {id}) {title}
                </Link>

            </div>

        </div>
    );
};

export {Post};