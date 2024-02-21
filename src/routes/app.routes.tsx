import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AppViewDetails from '../views/view-details';

const AppRouting = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/view-details" />} />
            <Route path="/view-details" Component={AppViewDetails} />
        </Routes>
    )
}

export default AppRouting;