import { useContext } from "react";
import DataContext from "../context/data.js";
import React from "react";
import { Fragment } from "react";
import Chart from "./Chart.js";
import TradeInterface from "./openTrade/TradeInterface.js";

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
