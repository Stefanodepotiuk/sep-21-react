import React from 'react';


import {Route, Routes, Link} from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SinglPostPage from "./Pages/SinglPostPage/SinglPostPage";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<SinglPostPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>
            </Routes>

        </div>
    );
};

export default App;