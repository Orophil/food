import React, { useContext } from "react";
import { sendPrice } from "../../Offer";
import { ProductContext } from "../Context/ContextProvider";

export default function SendProducts() {
  const { state } = useContext(ProductContext);
  
  const handleText = () => {
    if (state.totalPrice - state.offerPrice <= 100_000) {
      return state.lng === "PR"
        ? `${sendPrice.toLocaleString()} ரூபாய்`
        : `${sendPrice.toLocaleString()} RS`;
    } else {
      return state.lng === "PR" ? "இலவசம்" : "Free";
    }
  };

  return (
    <div className="send_products">
      <div className="send_info_price">
        <span>{state.lng === "PR" ? " பொருட்களை அனுப்புதல் செலவு" : "shipping cost"}</span>
        <span>{handleText()}</span>
      </div>
      {state.totalPrice - state.offerPrice > 100_000 && (
        <div className="send_free_img">
          <img src="images/free.svg" alt="free" />
        </div>
      )}
    </div>
  );
}