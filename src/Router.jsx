import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Register from "./pages/Register/View/Register";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
             <Route path="/register" element={<Register />} /> */

        </Routes>
    </BrowserRouter>
  );
};
