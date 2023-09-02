import React, { useState, useContext } from "react";
import { ProductContext } from "../Context/ContextProvider";

function Offer() {
  const [offerInput, setOfferInput] = useState("");
  const [clickButton, setClickButton] = useState(false);
  const { state, dispath } = useContext(ProductContext);

  const inputHandler = (e) => {
    setOfferInput(e.target.value);
  };

  const checkOfferCode = () => {
    if (offerInput) {
      setClickButton(true);
      dispath({ type: "OFFER_CODE", payload: offerInput });
    }
  };

  return (
    <div className="offer_container">
      <span>
        {state.lng === "PR"
          ? "   உங்களிடம் தள்ளுபடி குறியீடு உள்ளதா"
          : "Do you have a discount code?"}
      </span>
      <div className="offer_box">
        <input
          value={offerInput}
          onChange={(e) => inputHandler(e)}
          type="text"
          disabled={state.isEnterOfferCode}
          placeholder={
            state.lng === "PR" ? "தள்ளுபடி குறியீடு:ABCD" : "discount code: ABCD"
          }
        />
        <button disabled={state.isEnterOfferCode} onClick={checkOfferCode}>
          {state.lng === "PR" ? " விண்ணப்பிக்க" : "Apply"}
        </button>
      </div>
      {clickButton && state.isEnterOfferCode && (
        <span className="offer_true">{state.offerMessage}</span>
      )}
      {clickButton && !state.isEnterOfferCode && (
        <span className="offer_false">{state.offerMessage}</span>
      )}
    </div>
  );
}

export default Offer;