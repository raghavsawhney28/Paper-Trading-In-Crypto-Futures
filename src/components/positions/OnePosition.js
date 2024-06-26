import classes from "./Positions.module.css";
import DataContext from "../../context/data";
import { useContext } from "react";

const OnePosition = ({
  symbol,
  size,
  entryPrice,
  markPrice,
  liqPrice,
  margin,
  pnl,
  index,
  deletePosition,
}) => {
  const b = useContext(DataContext);
  return (
    <tbody>
      <tr className={classes.trbody}>
        <th className={classes.symbol}>
          {symbol}
          <div className={classes.leverage}>
            <span>{b.Leverage}x</span>
          </div>
        </th>
        <td className={classes.td}>{size}USDT</td>
        <td className={classes.td}>{entryPrice}</td>
        <td className={classes.td}>{markPrice}</td>
        <td className={classes.liq}>{liqPrice}</td>
        <td className={classes.td}>{margin} USDT</td>
        <td className={classes.pnl}>{pnl}</td>
        <td className={classes.td}>
          <div className={classes.close} onClick={() => deletePosition(index)}>
            X
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default OnePosition;
