import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:role" element={<App />} />
    </Routes>
  </BrowserRouter>
);
