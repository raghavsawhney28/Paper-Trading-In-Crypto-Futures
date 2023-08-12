import classes from "./CurrentCoin.module.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { useContext, useState, useEffect } from "react";
import DataContext from "../context/data";

const CurrentCoin = () => {
  const [previousPrice, setPreviousPrice] = useState(null);
  const a = useContext(DataContext);

  // useEffect to update previousPrice when a.Price changes

  useEffect(() => {
    if (
      previousPrice === null ||
      a.Price > previousPrice ||
      a.Price < previousPrice
    ) {
      setTimeout(() => {
        setPreviousPrice(a.Price);
      }, 5000);
    }
  }, [a.Price, previousPrice]);

  const priceIncrease = previousPrice !== null && a.Price > previousPrice;
  const priceClass = priceIncrease ? classes.priceGreen : classes.priceRed;

  return (
    <div
      className={classes.current}
      onPointerLeave={() => a.setBur(false)}
      
    >
      <div
        className={classes.symbol}
        onClick={() => a.setBur(!a.showBur)}
        onPointerEnter={() => a.setBur(true)}
      >
        BTCUSDT
        <ArrowDropDownRoundedIcon className={classes.icon} />
      </div>
      <div onPointerEnter={() => a.setBur(false)} className={priceClass}>
        {a.Price}
      </div>
    </div>
  );
};

export default CurrentCoin;
