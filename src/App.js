import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom"

import {Layout} from "./componenta";
import {PostCommentsPage, PostDetailPage, PostPage, UserDetailsPage, UserPostPage, UsersPage} from "./pages";

const App = () => {

    return (
        <Routes>

            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostDetailPage/>}>
                        <Route path={'comments'} element={<PostCommentsPage/>}/>
                    </Route>

                </Route>

            </Route>

        </Routes>
    );
};

export default App;