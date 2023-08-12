import { useState } from "react";

import classes from "./TradingOptions.module.css";

const TradingOptions = (props) => {
  const [limitActive, setLimitActive] = useState(true);
  const [marketActive, setMarketActive] = useState(false);
  const limitClass = limitActive ? classes.limitactive : classes.limit;
  const marketClass = marketActive ? classes.marketactive : classes.market;

  const limitClickHandler = () => {
    setLimitActive(true);
    setMarketActive(false);
    props.marketLimitHandler();
  };
  const marketClickHandler = () => {
    setLimitActive(false);
    setMarketActive(true);
    props.limitMarketHandler();
  };

  return (
    <div className={classes.TradingOptions}>
      <button onClick={limitClickHandler} className={limitClass}>
        Limit
      </button>
      <button onClick={marketClickHandler} className={marketClass}>
        Market
      </button>
    </div>
  );
};

export default TradingOptions;
