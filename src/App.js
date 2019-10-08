import React from "react";
import "./App.css";

// Let's not talk about re-rendering and performance here, it's just a demo!
const composeConsumers = consumers => TargetComponent =>
  consumers.reduce(
    (Component, componentTuple) => {
      const Wrapper = componentTuple[0];
      const stateName = componentTuple[1];
      return props => (
        <Wrapper>
          {state => {
            const namedState = {
              [stateName]: state
            };
            return <Component {...namedState} {...props} />;
          }}
        </Wrapper>
      );
    },
    props => <TargetComponent {...props} />
  );

const MessageContext = React.createContext();
MessageContext.displayName = "MessageContext";
const MessageContextInitialState = {
  thatMessage: "Hallo uit"
};

const CitiesContext = React.createContext();
CitiesContext.displayName = "CitiesContext";
const CitiesContextInitialState = {
  thatCity: "Amsterdam"
};

const MessageComponent = ({ messages, cities, normalProp }) => (
  <h1>
    {messages.thatMessage} {cities.thatCity}! {normalProp}
  </h1>
);

const StatefulMessageComponent = composeConsumers([
  [MessageContext.Consumer, "messages"],
  [CitiesContext.Consumer, "cities"]
])(MessageComponent);

const App = () => (
  <MessageContext.Provider value={MessageContextInitialState}>
    <CitiesContext.Provider value={CitiesContextInitialState}>
      <StatefulMessageComponent normalProp="Doe normaal!" />
    </CitiesContext.Provider>
  </MessageContext.Provider>
);

export default App;
