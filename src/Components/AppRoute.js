import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';

const AppRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>} ></Route>
                {/* <Route></Route> */}
            </Routes>
        </div>
    );
};

export default AppRoute;