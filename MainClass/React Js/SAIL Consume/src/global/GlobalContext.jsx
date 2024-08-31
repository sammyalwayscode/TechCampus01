import { createContext } from "react";
export const NameState = createContext();

export const GlobalState = ({ children }) => {
  // const [myName, setMyName] = useState("Samuel");
  const myName = "Samuel Benson";
  return <NameState.Provider value={{ myName }}>{children}</NameState.Provider>;
};
