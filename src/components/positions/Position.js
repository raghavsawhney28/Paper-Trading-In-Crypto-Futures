import classes from "./Positions.module.css";

import OnePosition from "./OnePosition.js";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/data";
import axios from "axios";

const Positions = () => {
  const [Price, setPrices] = useState(0);
  const [Percent, setPercent] = useState();
  const [ProfitPercent, setProfitPercent] = useState();
  const [EntryPrice, setEntryPrice] = useState(20048);
  const b = useContext(DataContext);

  const [positions, setPositions] = useState([
    {
      symbol: "BTCUSDT",
      size: 2250.5,
      entryPrice: 20048,
      markPrice: Price,
      liqPrice: 16753.42,
      margin: 460,
      pnl: 0,
    },
    {
      symbol: "ETHUSDT",
      size: 2250.5,
      entryPrice: 1200,
      markPrice: Price,
      liqPrice: 16753.42,
      margin: 526,
      pnl: 0,
    },
  ]);

  useEffect(() => {
    const socketUrls = positions.map(
      (position) =>
        `wss://stream.binance.com:9443/ws/${position.symbol.toLowerCase()}@trade`,
    );

    const webSockets = socketUrls.map((url, index) => {
      const ws = new WebSocket(url);
      

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const newPrice = parseFloat(data.p).toFixed(2);

          setPositions((prevPositions) =>
            prevPositions.map((position, i) =>
              i === index
                ? {
                    ...position,
                    markPrice: newPrice,
                    pnl: calculatePnl(
                      newPrice,
                      position.entryPrice,
                      position.margin,
                    ),
                  }
                : position,
            ),
          );
        } catch (error) {
          console.error("Error parsing incoming data:", error);
        }
      };

      // ws.onerror = (error) => {
      //   console.error("WebSocket connection error:", error);
      // };

      return ws;
    });

    return () => {
      webSockets.forEach((ws) => ws.close());
    };
  }, [positions]);

  const calculatePnl = (markPrice, entryPrice, margin) => {
    const percent = (((markPrice - entryPrice) / entryPrice) * 100).toFixed(2);
    const profitPercent = (percent * b.Leverage).toFixed(2);
    const profitUSDT = ((margin / 100) * profitPercent).toFixed(2);
    return `+${profitUSDT} USDT (+${profitPercent}%)`;
  };

  // const ProfitUSDT = ((Margin / 100) * ProfitPercent).toFixed(2);
  // const Profit = `+${ProfitUSDT} USDT (+${ProfitPercent}%)`;

  // useEffect(() => {
  //   setPositions(prevPositions =>
  //     prevPositions.map(position => ({
  //       ...position,
  //       markPrice: Price,
  //       pnl: profit
  //     }))
  //   );
  // }, [Price, profit]);

  const deletePosition = (index) => {
    setPositions((prevPositions) =>
      prevPositions.filter((_, i) => i !== index),
    );
  };

  const logout = async () => {
    try {
      const response = await fetch('api/v1/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include' 
      });

      if (response.ok) {
        console.log("Log out sucess")
        // Redirect to login page or update UI
        // window.location.href = '/login';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div className={classes.div}>
      <table className={classes.body}>
        <thead className={classes.head}>
          <tr className={classes.tr}>
            <th className={classes.th}>Symbol</th>
            <th className={classes.th}>Size</th>
            <th className={classes.th}>Entry Price</th>
            <th className={classes.th}>Mark Price</th>
            <th className={classes.th}>Liq.Price</th>
            <th className={classes.th}>Margin</th>
            <th className={classes.th}>PNL</th>
            <th className={classes.closeall} onClick={logout}>Close All Positions</th>
          </tr>
        </thead>

        {positions.map((positionData, index) => (
          <OnePosition
            key={index}
            {...positionData}
            index={index}
            deletePosition={deletePosition}
          />
        ))}
      </table>
    </div>
  );
};

export default Positions;
