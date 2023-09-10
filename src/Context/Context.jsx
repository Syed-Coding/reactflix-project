import React, { useReducer } from "react";
import { createContext } from "react";
import { initialState, reducer } from "../Reducer/reducer";
import { useContext } from "react";

const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);
export const AppContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const contextValue = { state, dispatch };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
