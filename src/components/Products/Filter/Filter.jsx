import React, { useContext } from "react";
import { FilterContext } from "../../Context/ContextFilter";
import "./Filter.css";
import { ProductContext } from "../../Context/ContextProvider";

export default function Filter() {
  const { state, dispath } = useContext(FilterContext);
  const { state: lng } = useContext(ProductContext);

  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button
          onClick={() => dispath({ type: "ALL" })}
          className={`filter_btn  ${state.category === "ALL" && "active"}`}
        >
          {lng.lng === "PR" ? "அனைத்தும்" : "All"}
        </button>
        <button
          onClick={() => dispath({ type: "VEGETABLE" })}
          className={`filter_btn ${state.category === "VEGETABLE" && "active"}`}
        >
          {lng.lng === "PR" ? "காய்கறி" : "Vegetables"}
        </button>
        <button
          onClick={() => dispath({ type: "FRUIT" })}
          className={`filter_btn ${state.category === "FRUIT" && "active"}`}
        >
          {lng.lng === "PR" ? "பழங்கள்" : "Fruit"}
        </button>
        <button
          onClick={() => dispath({ type: "NUTS" })}
          className={`filter_btn ${state.category === "NUTS" && "active"}`}
        >
          {lng.lng === "PR" ? "பருப்பு வகைகள்" : "Nuts"}
        </button>
        <button
          onClick={() => dispath({ type: "BEANS" })}
          className={`filter_btn ${state.category === "BEANS" && "active"}`}
        >
          {lng.lng === "PR" ? "பீன்ஸ்" : "Beans"}
        </button>
      </div>
    </div>
  );
}