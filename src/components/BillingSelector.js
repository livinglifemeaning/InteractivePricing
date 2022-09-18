import React from "react";
import classes from "./BillingSelector.module.css"
const BillingSelector = (props) => {
  return (
    <div className={classes.container} onChange={props.onChange}>
        <p>Monthly Billing</p>
      <label className={classes.switch}>
        <input type="checkbox" />
        <span className={classes.slider}/>
      </label>
      <p>Yearly Billing</p>
      <div className={classes.discount}>-25%</div>
    </div>
  );
};

export default BillingSelector;
