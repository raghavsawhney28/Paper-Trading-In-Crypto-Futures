import classes from "./Limit.module.css";

const Limit = () => {
  return (
    <div className={classes.body}>
      
        <div className={classes.label}>Limit Price</div>
        <div className={classes.USDT}>
          {" "}
          USDT
          <input className={classes.input} type="integer"></input>
        
      </div>
      
    </div>
  );
};

export default Limit;
