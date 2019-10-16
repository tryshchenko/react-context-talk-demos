import React, { useContext, useState, useMemo } from "react";
import "./App.css";

const fib = n => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

const AppContext = React.createContext();
AppContext.displayName = "AppContext";

const RenderAnotherMessage = ({ context }) => {
  console.log("Render of passive component");
  fib(40);
  return <h2>{context.otherMessage}</h2>;
};

const MessageComponent = () => {
  console.log("Render of active component");
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

const AnotherMessageComponent = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <RenderAnotherMessage context={context} />
    </div>
  );
  // return useMemo(
  //   () => (
  //     <div>
  //       <RenderAnotherMessage context={context} />
  //     </div>
  //   ),
  //   [context.otherMessage]
  // );
};

const AppContextProvider = ({ children }) => {
  const [thatMessage, setThatMessage] = useState("Hello Amsterdam!");
  const [otherMessage, setOtherMessage] = useState("Bye Wrocław!");
  return (
    <AppContext.Provider
      value={{ thatMessage, otherMessage, setOtherMessage, setThatMessage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const App = () => (
  <AppContextProvider>
    <MessageComponent />
    <AnotherMessageComponent />
  </AppContextProvider>
);

export default App;
