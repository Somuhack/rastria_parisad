import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const renderRouter = (routes) =>
  routes.map((item, index) => {
    const Component = item.element;

    return (
      <Route key={index} path={item.path} element={<Component />}>
        {item.children && renderRouter(item.children)}
      </Route>
    );
  });

const AppRouter = () => {
  return <Routes>{renderRouter(routes)}</Routes>;
};

export default AppRouter;
