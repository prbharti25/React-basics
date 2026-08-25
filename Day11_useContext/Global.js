import { createContext } from "react";

const GlobalContext =  createContext("This is Global context") //can store anything : array , object, string etc
// createContext create and returns object that is passed to the GlobalContext.

export default GlobalContext;