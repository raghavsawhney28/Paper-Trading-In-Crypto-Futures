import React from "react";
import DataContext from "../../context/data";
import classes from "./PositionR.module.css";
import { useContext, useState, useEffect } from "react";

const PositionR = () => {
  const [Price, setPrices] = useState(null);
  const [Percent, setPercent] = useState();
  const [ProfitPercent, setProfitPercent] = useState();
  const [EntryPrice, setEntryPrice] = useState(20048);
  const b = useContext(DataContext);
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

        setPercent((((newPrice - EntryPrice) / EntryPrice) * 100).toFixed(2));
        setProfitPercent((Percent * b.Leverage).toFixed(2));
      } catch (error) {
        console.error("Error parsing incoming data:", error);
      }
    };

    // Event listener for WebSocket connection error
    ws.onerror = (error) => {
      console.error("WebSocket connection error:", error);
    };

    // Clean up function to close the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, [EntryPrice, Percent, b.Leverage]);

  const Margin = 450.1;
  const ProfitUSDT = ((Margin / 100) * ProfitPercent).toFixed(2);
  const Profit = `+${ProfitUSDT}(+${ProfitPercent}%)`;
  return (
    <>
      <div className={classes.div1}>
        <table className={classes.body1}>
          <thead className={classes.thead1}>
            <tr className={classes.tr1}>
              <th className={classes.symbol1}>
                BTCUSDT Perpetual
                <div className={classes.leverage1}>
                  <span>{b.Leverage}x</span>
                  {/* <span>Isolate 10x</span> */}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className={classes.tbody1}>
            <tr>
              <th className={classes.size1}>Size(USDT)</th>
            </tr>
            <tr>
              <td className={classes.size11}>2250.50</td>
            </tr>
            <tr>
              <th className={classes.margin1}>Margin(USDT)</th>
            </tr>
            <tr>
              {/* <td className={classes.margin11}>1200</td> */}
              <td className={classes.margin11}>{Margin} USDT</td>
            </tr>
            <tr>
              <th className={classes.Eprice1}>Entry Price</th>
            </tr>
            <tr>
              <td className={classes.Eprice11}>20,048</td>
            </tr>
            <tr>
              <th className={classes.Mprice1}>Mark Price</th>
            </tr>
            <tr>
              <td className={classes.Mprice11}>
                {/* 20,798 */}
                <LivePrice Price={Price} />
              </td>
            </tr>
            <tr>
              <th className={classes.Lprice1}>Liq. Price</th>
            </tr>
            <tr>
              <td className={classes.Lprice11}>16,753</td>
            </tr>
            <tr>
              <th className={classes.Pnl1}>PNL(USDT)</th>
            </tr>
            <tr>
              {/* <td className={classes.Pnl11}>200</td> */}
              <td className={classes.Pnl11}>{Profit}</td>
            </tr>
            <tr>
              <th className={classes.closeP}>Close All</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default PositionR;
