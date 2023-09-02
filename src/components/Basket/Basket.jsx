import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext } from "../Context/ContextProvider";
import BasketItem from "./Basketitem";

import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";
import Offer from "./Offer";

export default function Basket() {
  const { state, dispath } = useContext(ProductContext);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>{state.lng === "PR" ? "  கூடை" : "Basket"}</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            {state.lng === "PR" ? " பொருட்கள் பக்கம்" : "Products page"}
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJ85ehva_xJFbpoWvd-77ct8hQ98-xu4UL3GKi78QedkDo7YA5LKBcIsbcbknBYSaQCg&usqp=CAU" alt="announcement" />
              <span>
                {state.lng === "PR"
                  ? " 100,000 RS மேல் வாங்குபவர்களுக்கு ஷிப்பிங் இலவசம்."
                  : "Shipping is free for purchases over 100,000 RS."}
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge/>
            <div className="basket_price">
              <span>
                {state.lng === "PR" ? "மொத்தம் " : "Total shopping cart"}
              </span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} $</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>
                  {state.lng === "PR" ? " தள்ளுபடி விலை" : "Discounted price"}
                </span>
                <span>
                  {state.totalPriceAfterOffer.toLocaleString()}
                  {state.lng === "PR" ? "ரூபாய்" : "RS"}
                </span>
              </div>
            )}
            <Offer/>
            <SendProducts/>
            <div className="basket_send">
              <span>
                {state.lng === "PR"
                  ? "செலுத்த வேண்டிய மொத்தத் தொகை" : "Total amount payable"}
              </span>
              <span>
                {state.totalPriceFainal.toLocaleString()}
                {state.lng === "PR" ? "ரூபாய்" : "RS"}
              </span>
            </div>
            <button className="basket_button_buy">
              {state.lng === "PR"
                ? " கொள்முதல் செயல்முறையைத் தொடரவும்"
                : "Continue the purchase process"}
            </button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              {state.lng === "PR"
                ? ` அகற்று${state.basket.length} வணிக வண்டியில் இருந்து பொருட்கள்`
                : `Remove ${state.basket.length} items from the shopping cart`}
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
            alt=""
          />
          <span className="favorite_empty_title">
            {state.lng === "PR"
              ? " ஷாப்பிங் கார்ட் காலியாக உள்ளது"
              : "The shopping cart is empty"}
          </span>
        </div>
      )}
    </>
  );
}