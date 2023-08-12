import { useState } from "react";

import classes from "./Slider.module.css";

const Slider = () => {
  const [volume, setVolume] = useState(10); // Initial volume value

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value);
    setVolume(newVolume);
  };

  return (
    <div className={classes.first}>
      <div className={classes.slider}>
        <label dir="ltr">Adjust leverage </label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          id="fader"
          step="5"
          list="volsettings"
          onChange={handleVolumeChange}
        />
        <datalist id="volsettings">
          <option>0</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
          <option>35</option>
          <option>40</option>
          <option>50</option>
          <option>55</option>
          <option>60</option>
          <option>65</option>
          <option>70</option>
          <option>75</option>
          <option>80</option>
          <option>85</option>
          <option>90</option>
          <option>95</option>
          <option>100</option>
        </datalist>
        <h2 className={classes.volume}>{volume}</h2>
      </div>
    </div>
  );
};

export default Slider;
