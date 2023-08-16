import React from "react";
import classes from "./rPosition.module.css";

const Positionr = () => {
  return (
    <>
      <div className={classes.closeAllDiv}>
        <button className={classes.closeAll}>Close all</button>
      </div>
      <div>
        <label className={classes.type}>B</label>
        <label className={classes.symbol}>BTCUSDT</label>
        <label>5X</label>
      </div>
      <table className={classes.table}>
        <tr>
          <th>Name</th>
          <th>Telephone</th>
          <th>Telephone</th>
        </tr>
        <tr>
          <td className={classes.td}>Bill Gates</td>
          <td className={classes.td}>555 77 854</td>
          <td className={classes.td}>555 77 855</td>
        </tr>
      </table>
    </>
  );
};

export default Positionr;
