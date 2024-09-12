import React from "react";

import HomePage from './screen/HomePage';
import Profile from './screen/Profile';
import About from './screen/About';
import ErrorPage from './screen/ErrorPage';
import SingleProfile from './screen/SingleProfile';
import MyProfile from './screen/MyProfile';


export const routes = [
    {
        path:'/',
        element: <HomePage/>,
    },
    {
        path:'profile',
        element: <Profile/>,
        children:[{
            path:'me',
            element:<MyProfile/>
        },{
            path:':id',
            element: <SingleProfile/>
        }]
    },
    {
        path:'*',
        element: <ErrorPage/>
    }
    

]