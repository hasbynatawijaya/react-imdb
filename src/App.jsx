import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import routes from "./routes";
import RouteWithLayout from "./routes/RouteWithLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <RouteWithLayout key={route.path} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
