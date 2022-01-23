import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/photo.service";
import './photo.css';

const PhotoPage = () => {

    const {id} = useParams();
    const [photos, setPhotos] = useState([null]);

    useEffect(() => {
        photoService.getById(id).then(value => setPhotos({...value}))
    }, [])

    return (
        <div>

            {photos &&
            <div className={'photoStyle'}>

                <div>
                    <div>Id : {photos.id}</div>
                    <div>Title : {photos.title}</div>
                </div>

                <div><img src={photos.url} className={'photo'} alt=""/></div>

            </div>
            }

        </div>
    );
};

export {PhotoPage};