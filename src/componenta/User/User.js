import React from 'react';
import {Link} from "react-router-dom";

import './User.css'

const User = ({user: {id, name}}) => {
    return (
        <div>

            <div className={'user'}>
                <div> {id}) {name}</div>

                <div className={'buttonTwo'}>
                    <div>
                        <Link to={id.toString()}>
                            <button>user details</button>
                        </Link>
                    </div>

                    <div>
                        <Link to={`${id.toString()}/albums`}>
                            <button>albums</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export {User};