import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";
import LanguageSelect from "../LngSelect/LanguageSelect";
import { ProductContext } from "../Context/ContextProvider";

export default function Footer() {
  const { state: lng } = useContext(ProductContext);

  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>

      <div className="footer_last">
        <div className="footer_link_box">
          <Link to={"/basket"}>{lng.lng === "PR" ? " கூடை" : "Cart"}</Link>
          <Link to={"/favorite"}>
            {lng.lng === "PR" ? " பிடித்தது" : "Favorite"}
          </Link>
        </div>
        <div className="footer_link_box">
          <a
            href="https://github.com/Orophil/food.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lng.lng === "PR"
              ? "GitHub இல் திட்ட மூலக் குறியீடு"
              : "Project source code on GitHub"}
          </a>
          <LanguageSelect />
        </div>
      </div>
    </footer>
  );
}
