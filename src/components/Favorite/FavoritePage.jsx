import React, { useContext } from "react";
import { ProductContext } from "../Context/ContextProvider";
import "./FavoritePage.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import FavoriteCard from "./FavoriteCard";

export default function FavoritePage() {
  const { state, dispath } = useContext(ProductContext);


  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>{state.lng === "PR" ? " பிடித்தவை" : "Favorites"}</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            {state.lng === "PR" ? " பொருள்கள் பக்கம்" : "Products page"}
          </Link>
        </div>
      </div>
      <div className="favorite-wrapper">
        {state.favorites.length > 0 ? (
          <>
            <div>
              <button
                onClick={() => dispath({ type: "REMOVE_ALL_FAVORITE" })}
                className="favorite_removeAll"
              >
                {state.lng === "PR" ? "அனைத்தும் நீக்க" : "Remove All"}
              </button>
            </div>
            <div className="favorite_container">
              {state.favorites.map((product) => (
                <FavoriteCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          <div className="favorite_empty">
            <img
              className="favorite_empty_img"
              src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
              alt="empty cart"
            />
            <span className="favorite_empty_title">
              {state.lng === "PR"
                ? " பிடித்தவை காலியாக உள்ளன"
                : "Favorites are empty"}
            </span>
          </div>
        )}
      </div>
    </>
  );
}