import React, { useState, useEffect } from "react";
import classes from "./Burger.module.css";
import { useContext } from "react";
import DataContext from "../context/data";
import SearchIcon from '@mui/icons-material/Search';

const Burger = () => {
  const a = useContext(DataContext);

  return (
    <>
      <div
        onPointerEnter={() => a.setBur(true)}
        onPointerLeave={() => a.setBur(true)}
        className={classes.burger}
      >
        <div className={classes.search}>
          <SearchIcon sx={{ height: "33px", position: "relative", width: "22px", left: "5%", top: "10%" }}></SearchIcon>
      <input className={classes.searchBar} type="text"></input>
      </div>
      </div>
    </>
  );
};

export default Burger;

