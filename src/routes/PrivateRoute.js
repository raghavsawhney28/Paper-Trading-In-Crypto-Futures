import React, { useContext, useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DataContext from "../context/data";

const PrivateRoutes = () => {
  const a = useContext(DataContext);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null indicates loading state

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/api/v1/users/status', {
          method: 'GET',
          credentials: 'include', // Include cookies with the request
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer <your_jwt_token>' // Uncomment if using token in header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(true);
          console.log(true, "User is logged in");
        } else {
          setIsLoggedIn(false);
          console.log(false, "User is not logged in");
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
