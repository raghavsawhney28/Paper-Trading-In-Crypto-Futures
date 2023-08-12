import classes from "./Limit.module.css";

const Market = () => {
  return (
    <div className={classes.body}>
      <div className={classes.label}>Quantity</div>
      <div className={classes.USDT}>
        {" "}
        USDT
        <input className={classes.input} type="integer"></input>
      </div>
    </div>
  );
};

export default Market;
