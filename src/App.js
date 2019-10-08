import React from "react";
import "./App.css";

const AppContext = React.createContext();
const AppContextInitialState = {
  thatMessage: "Hoi from state!"
};

const App = () => (
  <AppContext.Provider value={AppContextInitialState}>
    <AppContext.Consumer>
      {state => <h1>{state.thatMessage}</h1>}
    </AppContext.Consumer>
  </AppContext.Provider>
);

export default App;
