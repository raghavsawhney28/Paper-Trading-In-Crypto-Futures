import React, { useState, useEffect } from "react";
import classes from "./RangeSlider.module.css";
import { useContext } from "react";
import DataContext from "../../context/data";

const RangeSlider = () => {
  const a = useContext(DataContext);
  const [Percent, setPercent] = useState(20);

  const handleInputChangeLev = (event) => {
    let target = event.target;
    const newValue = event.target.value;
    if (newValue < 1) {
      return;
    } else {
      a.setLeverage(newValue);
    }
    const min = parseInt(target.min);
    const max = parseInt(target.max);
    const val = parseInt(target.value);
    let percentage = ((val - min) * 100) / (max - min);
    setPercent(percentage);
  };

  const decreaseLeverage = () => {
    const min = 1;
    const max = 20;
    const val = a.Leverage;
    let percentage = ((val - min) * 100) / (max - min);
    setPercent(percentage - 5);
    a.setLeverage((prevLeverage) => Math.max(prevLeverage - 1, 1));
  };

  const increaseLeverage = () => {
    if (a.Leverage === 20) {
      return;
    } else {
      a.setLeverage((prevLeverage) => prevLeverage + 1);
    }
    const min = 1;
    const max = 20;
    const val = a.Leverage;
    let percentage = ((val - min) * 100) / (max - min);
    setPercent(percentage + 5);
  };

  const handleInputChange = (e) => {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("text");
    }

    const min = parseInt(target.min);
    const max = parseInt(target.max);
    const val = parseInt(target.value);
    let percentage = ((val - min) * 100) / (max - min);
    setPercent(percentage);
    // target.style.backgroundSize = `${percentage}% 100%`;
    a.setLeverage(val);
  };

  return (
    <div className={classes.first}>
      <label>Adjust Leverage</label>
      <div className={classes.inputDiv}>
        <button
          className={classes.buttonDec}
          tabIndex="0"
          type="button"
          onClick={decreaseLeverage}
        >
          <span className={classes.span}>-</span>
        </button>
        <input
          type="text"
          id="text"
          step="1"
          min="1"
          max="20"
          inputMode="numeric"
          value={a.Leverage}
          onChange={handleInputChangeLev}
          className={classes.inputLev}
        ></input>
        <div className={classes.x}>x</div>
        <button
          className={classes.buttonInc}
          tabIndex="0"
          type="button"
          onClick={increaseLeverage}
        >
          <span className={classes.span}>+</span>
        </button>
      </div>
      <div className={classes.slider}>
        <div className={classes.second}>
          <input
            className={classes.input}
            type="range"
            step="1"
            min="1"
            max="20"
            value={a.Leverage}
            id="range"
            list="volsettings"
            onChange={handleInputChange}
            style={{ backgroundSize: `${Percent}% 100%` }}
          />
        </div>
        <ul className={classes.third}>
          <li className={classes.lifirst}>1x</li>
          <li className={classes.fourth}>5x</li>
          <li className={classes.fourth}>10x</li>
          <li className={classes.fourth}>15x</li>
          <li className={classes.lilast}>20x</li>
        </ul>
      </div>
    </div>
  );
};

export default RangeSlider;
