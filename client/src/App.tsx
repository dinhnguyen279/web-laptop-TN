import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRouter } from "./router";
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRouter.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
