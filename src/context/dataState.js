import React from "react";
import DataContext from "./data.js";
import { useState, useEffect } from "react";

const DataState = (props) => {
  //////////////////////////////////////////////////////////////////////////////////////// Live Price Tracking ////////////////////////////////////////////////////////////////////////////////
  const [Price, setPrices] = useState(null);
  useEffect(() => {
    // WebSocket connection URL
    const socketUrl = "wss://stream.binance.com:9443/ws/btcusdt@trade";

    // Create a new WebSocket instance
    const ws = new WebSocket(socketUrl);

    // Event listener for incoming messages
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const newPrice = parseFloat(data.p).toFixed(2);

        setPrices(newPrice);
      } catch (error) {
        console.error("Error parsing incoming data:", error);
      }
    };

    // Event listener for WebSocket connection error
    
    ws.onerror = (error) => {
      console.error("WebSocket connection error:");
    };

    // Clean up function to close the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////// Live Price Tracking /////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////// Responsive Checking///////////////////////////////////////////////////////////////////////////////////

  const [Responsive, setResponsive] = useState(false);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 800) {
        setResponsive(true);
      } else {
        setResponsive(false);
      }
    }

    // Initial check
    
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  ///////////////////////////////////////////////////////////////////////////////////////////// Responsive Checking ////////////////////////////////////////////////////////////////////////////////
  const coinList = {
    name: "BINANCE:BTCUSDT",
  };

  const [Leverage, setLeverage] = useState(5);
  const [showBur, setBur] = useState(false);

  const price = "2614";

  const myList = {
    k1: "BTC",
    k2: "ETH",
    k3: "BNB",
    k4: "SOL",
    k5: "MATIC",
    k6: "DOGE",
    k7: "XRP",
  };

  const [state, setState] = useState(coinList);
  const [Buy, setBuy] = useState(true);
  const [Sell, setSell] = useState(false);

  const update = (simbol) => {
    setState({
      name: simbol,
    });

    console.log(simbol);
  };
  const [showChart, setShowChart] = useState(false);
  const [showPositions, setShowPositions] = useState(false);

  

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const response = await fetch('/api/v1/users/status', {
  //         method: 'GET',
  //         credentials: 'include', // Include cookies with the request
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // 'Authorization': 'Bearer <your_jwt_token>' // Uncomment if using token in header
  //         },
  //       });
        
  //       if (response.ok) {
         
  //         const data = await response.json();
  //         setIsLoggedIn(true);
  //       } else {
  //         setIsLoggedIn(false);
  //       }
  //     } catch (error) {
  //       console.error('Error checking login status:', error);
  //       setIsLoggedIn(false);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        update,
        myList,
        Buy,
        Sell,
        setBuy,
        setSell,
        price,
        Leverage,
        setLeverage,
        showBur,
        setBur,
        Price,
        Responsive,
        showChart,
        setShowChart,
        showPositions,
        setShowPositions,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
