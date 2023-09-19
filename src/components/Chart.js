import { useEffect, useRef, React, useContext } from "react";
import classes from "./Chart.module.css";

import DataContext from "../context/data";

let tvScriptLoadingPromise;

const Chart = () => {
  const onLoadScriptRef = useRef();
  const a = useContext(DataContext);

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_49aba") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: a.state.name,
          interval: "15",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "in",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          // allow_symbol_change: true,
          container_id: "tradingview_49aba",
        });
      }
    }
  }, [a.state.name]);

  return <div id="tradingview_49aba" className={classes.tradingview} />
  ;
};

export default Chart;
