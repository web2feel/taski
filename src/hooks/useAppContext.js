import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export const useAppContext = () => {
    let ctx = useContext(AppContext)
    return {...ctx}
};
