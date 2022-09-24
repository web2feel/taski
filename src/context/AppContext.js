import { createContext, useReducer, useEffect } from "react";
import { reducer, initState } from "./AppReducer";
export const AppContext = createContext();

const AppContextComp = ({ children }) => {
  const initialized = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : initState;

  const [state, dispatch] = useReducer(reducer, initialized);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextComp;
