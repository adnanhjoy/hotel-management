import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;