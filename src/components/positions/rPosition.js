import React from "react";
import classes from "./rPosition.module.css";

const Positionr = () => {
  return (
    <>
      <div className={classes.closeAllDiv}>
        <button className={classes.closeAll}>Close all</button>
      </div>
      <div className={classes.body}>
        <label className={classes.type}>B</label>
        <label className={classes.symbol}>BTCUSDT</label>
        <label>5X</label>

        <table className={classes.table}>
          <tr>
            <th className={classes.pnlhead}>Unrealized PNL (USDT)</th>
            <th className={classes.roeHead}>ROE</th>
          </tr>
          <tr>
            <td className={classes.pnl}>991.35</td>
            <td className={classes.roe}>+219.15%</td>
          </tr>

          <tr>
            <th className={classes.pnlhead}>Size(USDT)</th>
            <th className={classes.roeHead}>Margin(USDT)</th>
          </tr>
          <tr>
            <td className={classes.size}>2250.50</td>
            <td className={classes.margin}>450.1</td>
          </tr>

          <tr>
            <th className={classes.pnlhead}>Entry Price</th>
            <th className={classes.roeHead}>Mark Price</th>
          </tr>
          <tr>
            <td className={classes.size}>20,048</td>
            <td className={classes.margin}>28745.1</td>
          </tr>
          <div className={classes.closePositionDiv}>
            <button className={classes.closePosition}>Close position</button>
          </div>
        </table>
      </div>

      <div className={classes.body}>
        <label className={classes.type}>B</label>
        <label className={classes.symbol}>BTCUSDT</label>
        <label>5X</label>

        <table className={classes.table}>
          <tr>
            <th className={classes.pnlhead}>Unrealized PNL (USDT)</th>
            <th className={classes.roeHead}>ROE</th>
          </tr>
          <tr>
            <td className={classes.pnl}>991.35</td>
            <td className={classes.roe}>+219.15%</td>
          </tr>

          <tr>
            <th className={classes.pnlhead}>Size(USDT)</th>
            <th className={classes.roeHead}>Margin(USDT)</th>
          </tr>
          <tr>
            <td className={classes.size}>2250.50</td>
            <td className={classes.margin}>450.1</td>
          </tr>

          <tr>
            <th className={classes.pnlhead}>Entry Price</th>
            <th className={classes.roeHead}>Mark Price</th>
          </tr>
          <tr>
            <td className={classes.size}>20,048</td>
            <td className={classes.margin}>28745.1</td>
          </tr>
          <div className={classes.closePositionDiv}>
            <button className={classes.closePosition}>Close position</button>
          </div>
        </table>
      </div>
    </>
  );
};

export default Positionr;
