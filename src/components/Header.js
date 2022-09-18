import useMediaQuery from "../hooks/useMediaQuery";
import classes from "./Header.module.css";

import Background from "../assets/bg-pattern.svg"; 

const Header = () => {
    const isDesktop = useMediaQuery("(min-width: 750px)")
  return (
    <div className={classes.header}>
      <div className={classes.bg}>
        <img src={Background} alt="" />
      </div>
      <div className={classes.text}>
      <h1 className={classes.title}>Simple, traffic-based pricing</h1>
      <div className={classes.paragraphs}>
      <p>Sign-up for our 30-day trial. {!isDesktop && <br/>} No credit card required</p>
      </div>
      </div>
    </div>
  );
};

export default Header;
