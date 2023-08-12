import React, { useState, useEffect } from "react";
import classes from "./Burger.module.css";
import { useContext } from "react";
import DataContext from "../context/data";

const Burger = () => {
  const a = useContext(DataContext);
  

  

  return (
    <>
      <div
        onPointerEnter={() => a.setBur(true)}
        onPointerLeave={() => a.setBur(false)}
        className={classes.burger}
      ></div>
    </>
  );
};

export default Burger;
