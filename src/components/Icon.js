import classes from './Icon.module.css';
import { useContext } from 'react';
import DataContext from '../context/data';
import React from 'react';

const Icon = (props) => {
  

    const symbol= props.symbol;
    const b = useContext(DataContext);
    
    const clickHandler= () => {
      b.update(`BINANCE:${symbol}USDT`);
    } 

    
    return (
        
      <button onClick={clickHandler} className={classes.button}>
      <img className={classes.icon} alt='imag' src={props.image}></img>
      <span className={classes.spn}>{symbol}</span>
    </button>
    );
}

export default Icon;