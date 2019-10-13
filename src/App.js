import React, { useContext, useState } from "react";
import "./App.css";

const AppContext = React.createContext();
AppContext.displayName = "AppContext";

const MessageComponent = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>{context.thatMessage}</h1>
      <input
        value={context.thatMessage}
        onChange={event => context.setThatMessage(event.target.value)}
      />
    </div>
  );
};

const AppContextProvider = ({ children }) => {
  const [thatMessage, setThatMessage] = useState("Hello Amsterdam!");
  return (
    <AppContext.Provider value={{ thatMessage, setThatMessage }}>
      {children}
    </AppContext.Provider>
  );
};

const App = () => (
  <AppContextProvider>
    <MessageComponent />
  </AppContextProvider>
);

export default App;
