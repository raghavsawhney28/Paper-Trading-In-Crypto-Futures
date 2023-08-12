import { useContext } from "react";
import DataContext from "../context/data";
import React from "react";
import { Fragment } from "react";
import Trades from "./positions/Trades";
import Chart from "./Chart";
import TradeInterface from "./openTrade/TradeInterface";

export default function TradingView() {
  const b = useContext(DataContext);
  return (
    <Fragment>
      {(b.showChart || !b.Responsive) && <Chart />}
      {!b.showChart && !b.showPositions && <TradeInterface />}
      {/* {b.showPositions && b.Responsive && <Trades />} */}
    </Fragment>
  );
}
