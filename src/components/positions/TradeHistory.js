import React from "react";
import classes from "./OpenOrder.module.css";

export const TradeHistory = () => {
  return (
    <div className={classes.div}>
      <table className={classes.body}>
        <thead className={classes.head}>
          <tr className={classes.tr}>
            <th className={classes.symbolh}>Symbol</th>

            <th className={classes.th}>Side</th>
            <th className={classes.th}>Price</th>
            <th className={classes.th}>Amount</th>
            <th className={classes.th}>Realized PNL</th>

            
          </tr>
        </thead>
        <tbody>
          <tr className={classes.trbody}>
            <th className={classes.symbol}>
              BTCUSDT
              <div className={classes.leverage}>
                <span>10x</span>
              </div>
            </th>

            <td className={classes.td}>Long</td>
            <td className={classes.td}>29381</td>
            <td className={classes.td}>566 USDT</td>
            <td className={classes.td}>215.25 USDT</td>
            
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

            <td className={classes.td}>Long</td>
            <td className={classes.td}>0.7028</td>
            <td className={classes.td}>350 USDT</td>
            <td className={classes.td}>-14.95 USDT</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;
