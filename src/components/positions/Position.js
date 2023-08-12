import classes from "./Positions.module.css";
import { useContext, useState, useEffect } from "react";
import DataContext from "../../context/data";
import LivePrice from "../../backend/LivePrice.js";

const Positions = () => {
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
  const Profit = `+${ProfitUSDT} USDT (+${ProfitPercent}%)`;

  return (
    <div className= {classes.div}>
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
          <th className={classes.closeall}>Close All Positions</th>
        </tr>
      </thead>
      <tbody>
        <tr className={classes.trbody}>
          <th className={classes.symbol}>
            BTCUSDT
            <div className={classes.leverage}>
              <span>{b.Leverage}x</span>
            </div>
          </th>
          <td className={classes.td}>2250.50 USDT</td>
          <td className={classes.td}>20,048</td>
          <LivePrice Price={Price} />
          <td className={classes.liq}>16,753.42</td>
          <td className={classes.td}>{Margin} USDT</td>
          <td className={classes.pnl}>{Profit}</td>
          <td className={classes.td}>
            <div className={classes.close}>X</div>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr className={classes.trbody}>
          <th className={classes.symbol}>
            XRPUSDT
            <div className={classes.leverage}>
              <span>5x</span>
            </div>
          </th>
          <td className={classes.td}>2645.50 USDT</td>
          <td className={classes.td}>0.6016</td>
          <td className={classes.td}>0.7028</td>
          <td className={classes.liq}>0.4652</td>
          <td className={classes.td}>476.10 USDT</td>
          <td className={classes.pnl}>+1546.07 USDT (+315.4%)</td>
          <td className={classes.td}>
            <div className={classes.close}>X</div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Positions;
