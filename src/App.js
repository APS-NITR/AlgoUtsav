import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Sponsor from "./Components/Sponsor";
import "./App.css";
import RootLayout from "./Components/Layout/RootLayout";
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="sponsor" element={<Sponsor />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
