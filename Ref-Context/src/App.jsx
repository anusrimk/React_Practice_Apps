import React, { useState, createContext } from "react";
import "./App.module.css";

import CompA from "./Components/CompA";

export const DataContext = createContext();

function ExampleComponent() {
  let [username, setUsername] = useState("Anusri");

  return (
    <div>
      <DataContext.Provider
        value={{
          name: username,
          setter: setUsername,
        }}>
        <CompA/>
      </DataContext.Provider>
    </div>
  );
}

export default ExampleComponent;
