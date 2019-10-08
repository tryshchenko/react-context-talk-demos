import React from "react";
import "./App.css";

const MessageContext = React.createContext();
const MessageContextInitialState = {
  thatMessage: "Hallo uit"
};

const CitiesContext = React.createContext();
const CitiesContextInitialState = {
  thatCity: "Amsterdam"
};

const App = () => (
  <MessageContext.Provider value={MessageContextInitialState}>
    <CitiesContext.Provider value={CitiesContextInitialState}>
      <MessageContext.Consumer>
        {messages => (
          <CitiesContext.Consumer>
            {cities => (
              <h1>
                {messages.thatMessage} {cities.thatCity}!
              </h1>
            )}
          </CitiesContext.Consumer>
        )}
      </MessageContext.Consumer>
    </CitiesContext.Provider>
  </MessageContext.Provider>
);

export default App;
