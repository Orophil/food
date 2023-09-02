import React, { createContext, useReducer } from "react";
import allProducts from "../../Data";

const initialFilterState = {
  filteredItems: [...allProducts],
  searchKey: "",
  category: 'ALL'
};

const filterItemsHandler = (key) => {
  const filteredItems = allProducts.filter((product) => {
    return product.category === key;
  });

  return { filteredItems };
};

const filterReduce = (state, action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD":
      state.searchKey = action.payload;
      return {
        ...state
      };
    case "ALL":
      state.filteredItems = [...allProducts];
      state.category = "ALL";
      return {
        ...state
      };

    case "VEGETABLE":
      state.category = "VEGETABLE";
      return {
        ...state,
        ...filterItemsHandler("காய்கறி")
      };

    case "FRUIT":
      state.category = "FRUIT";
      return { ...state, ...filterItemsHandler("பழங்கள்") };

    case "NUTS":
      state.category = "NUTS";
      return { ...state, ...filterItemsHandler("பருப்பு வகைகள்") };

    case "BEANS":
      state.category = "BEANS";
      return { ...state, ...filterItemsHandler("பீன்ஸ்") };

    default:
      return state;
  }
};

export const FilterContext = createContext();

export default function ContextFilter({ children }) {
  const [state, dispath] = useReducer(filterReduce, initialFilterState);
  return (
    <FilterContext.Provider value={{ state, dispath }}>
      {children}
    </FilterContext.Provider>
  );
}