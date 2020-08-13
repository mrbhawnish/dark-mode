import React from "react";
import { useLocalStorage } from "./useLocalStorage"

const useDarkMode = () => {
   const [someValue, setSomeValue] = useLocalStorage("name")
    

}

export default useDarkMode;