import React, { useContext, useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DataContext from "../context/data";
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
  const a = useContext(DataContext);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null indicates loading state

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const accessToken = Cookies.get('accessToken');
        
        const response = await fetch('https://paper-trading-in-crypto-futures-backend.onrender.com/api/v1/users/status', {
          method: 'GET',
          // credentials: 'include', // Include cookies with the request
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`, // Include the token in the header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(true);
          console.log("User is logged in:", data);
        } else {
          setIsLoggedIn(false);
          console.log("User is not logged in");
        }
      } catch (error) {
        console.error('Error checking login status:', error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return <div>Loading...</div>; // Render a loading indicator while the status is being checked
  }

  return (
    isLoggedIn ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoutes;
