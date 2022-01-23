import React, {useEffect, useState} from 'react';
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";

import {albumService} from "../../services/albums.service";

const AlbumsPage = () => {

    const {id} = useParams();
    const [albums, setAlbums] = useState([null]);
    const navigate = useNavigate();
    console.log(useParams());

    useEffect(() => {
        albumService.getById(id).then(value => setAlbums({...value}))
    }, [])

    const back = () => {
        navigate(-1);
    }


    return (
        <div>

            {albums &&
            <div>

                <h1>Albums</h1>
                <div>{albums.id}) Title: {albums.title}</div>

                <Link to='albums/photos'>
                    <button className={'button'}>Photo</button>
                </Link>

                <button onClick={back} className={'beak'}>beak</button>

            </div>
            }

            <Outlet/>
        </div>
    );
};

export {AlbumsPage};