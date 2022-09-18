import { useEffect, useState } from "react";
import BillingSelector from "./BillingSelector";
import classes from "./Card.module.css";
import RangeSlider from "./RangeSlider";
import StartTrial from "./StartTrial";

import pricingData from "../assets/data.json";
const Card = () => {
  const [pricingTerm, setPricingTerm] = useState("month");
  const [selectedOption, setSelectedOption] = useState("3");
  const [data, setData] = useState(pricingData[2]);
  const selectedOptionHandler = (value) => {
    setSelectedOption(String(value));
  };

  const togglePricingTerm = () => {
    pricingTerm === "month" && setPricingTerm("year");
    pricingTerm === "year" && setPricingTerm("month");
  };

  useEffect(() => {
    for (let i = 0; i < pricingData.length; i++) {
      let id = pricingData[i].id;
      if (selectedOption === id.charAt(id.length - 1)) {
        let selectedData = pricingData[i];
        if (pricingTerm === "year") {
          let price = selectedData.price * 12;
          let discount = price * 0.25;
          let yearlyPrice = price - discount;
          let newData = {
            price: yearlyPrice,
            id: selectedData.id,
            pageviews: selectedData.pageviews,
          };
          setData(newData);
        } else if (pricingTerm === "month") {
          setData(selectedData);
        }
      }
    }
  }, [selectedOption, pricingTerm]);

  return (
    <div className={classes.card}>
      <RangeSlider term={pricingTerm} changeValue={selectedOptionHandler} data={data}/>
      <BillingSelector onChange={togglePricingTerm} />
      <StartTrial />
    </div>
  );
};

export default Card;
