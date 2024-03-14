import React from "react";
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import Navbar from "./component/navbar/navbar";
import Home from "./component/home/home";

function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App