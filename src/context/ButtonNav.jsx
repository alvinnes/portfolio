import { createContext, useState } from "react";

export const ButtonNavContext = createContext();

const ButtonNavProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ButtonNavContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </ButtonNavContext.Provider>
  );
};

export default ButtonNavProvider;
