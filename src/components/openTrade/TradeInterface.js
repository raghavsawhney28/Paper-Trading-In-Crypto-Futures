import React, { Fragment, useState } from "react";
import classes from "./TradeInterface.module.css";
import Market from "./Market";
import RangeSlider from "./RangeSlider";
import TradingOptions from "./TradingOptions";
import Limit from "./Limit";
import BuyButton from "./BuyButton";
import SellButton from "./SellButton";
import { useContext } from "react";
import DataContext from "../../context/data";


const TradeInterface = () => {
  const a = useContext(DataContext);
  const [Markets, setMarket] = useState(false);
  const balanceAmount = 7452.12;

  const buyClass = a.Buy ? classes.buy : classes.grey;
  const sellClass = a.Sell ? classes.sell : classes.grey;

  const limitMarketHandler = () => {
    setMarket(true);
  };
  const marketLimitHandler = () => {
    setMarket(false);
  };

  const sellClickHandler = () => {
    a.setSell(true);
    a.setBuy(false);
  };
  const buyClickHandler = () => {
    a.setSell(false);
    a.setBuy(true);
  };

  return (
    <Fragment>
      <div className={classes.tradingPannel}>
        <div className={classes.first}>
          <div className={classes.second}>
            <button className={classes.third} onClick={buyClickHandler}>
              <div className={buyClass}>
                <div>
                  <div className={classes.fifth}>Buy | Long</div>
                </div>
              </div>
            </button>
            <button className={classes.sixth} onClick={sellClickHandler}>
              <div className={sellClass}>
                <div>
                  <div className={classes.fifth}>Sell | Short</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <RangeSlider />
        <TradingOptions
          limitMarketHandler={limitMarketHandler}
          marketLimitHandler={marketLimitHandler}
        />
        <div className={classes.balance}>
          <label>Avbl Margin</label>
          <label className={classes.balanceAmount}>{balanceAmount} USDT</label>
        </div>
        <Market />
        {!Markets && <Limit />}
        {a.Buy && <BuyButton />}
        {a.Sell && <SellButton />}
      </div>
    </Fragment>
  );
};

export default TradeInterface;
