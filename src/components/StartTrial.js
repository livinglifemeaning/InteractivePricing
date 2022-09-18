import React from 'react'
import Check from "../assets/icon-check.svg";
import classes from "./StartTrial.module.css"; 

const StartTrial = () => {
  return (
    <div className={classes.startTrial}>
        <div className={classes.separator}/>
        <div className={classes.flexBox}>
      <div className={classes.features}>
        <div className={classes.feature}>
        <img src={Check} alt=""/>
        <p>Unlimited websites</p>
        </div>
        <div className={classes.feature}>
        <img src={Check} alt=""/>
        <p>100% data ownership</p>
        </div>
        <div className={classes.feature}>
        <img src={Check} alt=""/>
        <p>Email reports</p>
        </div>
      </div>
      <div className={classes.btn}> Start my trial</div>
    </div>
    </div>
  )
}

export default StartTrial
