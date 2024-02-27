import React from "react";
import ReactDOM from "react-dom/client";
import { StyledApp } from "./style.ts";
import Router from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledApp />
    <Router />
  </React.StrictMode>
);
