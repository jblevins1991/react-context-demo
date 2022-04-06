import * as React from "react";
import PropsEditor from "./components/PropsEditor";
import UI from "./components/UserInterface";
import DynamicPropsProvider from "./components/DynamicPropsProvider";
import "./App.css";

function App() {
  return <DynamicPropsProvider>
    <h1>Context Demo Application</h1>

    <p>
      This application is a visual demo of how context works in react work. On the left side of the screen
      there is a textarea with JSON inside of it. This JSON value is stored within a ContextProvider. The
      useContext hook is used on the right side to pull the data out and render it .
    </p>

    <div className={'context-wrapper'}>
      <PropsEditor />

      <UI />
    </div>
  </DynamicPropsProvider>;
};

export default App;
