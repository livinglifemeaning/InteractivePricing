import useMediaQuery from "../hooks/useMediaQuery";
import ReactSlider from "react-slider";
import classes from "./RangeSlider.module.css";

const RangeSlider = ({ changeValue, term, data }) => {
  const isDesktop = useMediaQuery("(min-width: 750px)");

  return (
    <div className={classes.container}>
      <div className={classes.flexBox}>
        <p className={classes.pageviews}>{data.pageviews} Pageviews</p>
        {isDesktop && (
          <div className={`${classes.pricing} ${classes.desktop}`}>
            <p className={classes.num}>${data.price}.00</p>
            <p>/ {term}</p>
          </div>
        )}
      </div>
      <ReactSlider
        min={1}
        max={5}
        defaultValue={3}
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        onAfterChange={(value) => changeValue(value)}
      />
      {!isDesktop && (
        <div className={classes.pricing}>
          <p className={classes.num}>${data.price}.00</p>
          <p>/ {term}</p>
        </div>
      )}
    </div>
  );
};

export default RangeSlider;
