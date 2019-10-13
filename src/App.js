import React, { useContext } from "react";
import "./App.css";

const AppContext = React.createContext();
AppContext.displayName = "AppContext";

const MessageComponent = () => {
  const context = useContext(AppContext);
  return <h1>{context.thatMessage}</h1>;
};

const App = () => (
  <AppContext.Provider value={{ thatMessage: "Hello Amsterdam" }}>
    <MessageComponent normalProp="Doe normaal!" />
  </AppContext.Provider>
);

export default App;
