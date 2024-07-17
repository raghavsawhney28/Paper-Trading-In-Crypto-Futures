
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DataContext from "../context/data";
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
    const a = useContext(DataContext);
    const navigate = useNavigate();

  return a.isAuthenticated ? children : <Navigate to="/homepage" />;
};

export default PrivateRoute;
