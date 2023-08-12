
import "./App.css";

import React, { Component } from "react"
import Navbar from "./components/Navbar";
import News from "./components/News";

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


export default class App extends Component {
  
  render() {
    return (
      <>
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/business" element={<News key="business"  pageSize={6} country="in" category="business"/>} ></Route>
          <Route exact path="/intertainment"  element={<News key="intertainment" pageSize={6} country="in" category="intertainment"/>} ></Route>
          <Route exact path="/general"  element={<News  key="general" pageSize={6} country="in" category="general"/>} ></Route>
          <Route exact path="/health"  element={<News  key="health" pageSize={6} country="in" category="health"/>} ></Route>
          <Route exact path="/science"  element={<News  key="science" pageSize={6} country="in" category="science"/>} ></Route>
          <Route exact path="/technology"  element={<News key="technology" pageSize={6} country="in" category="technology"/>} ></Route>
          <Route exact path="/sports"  element={<News  key="sports" pageSize={6} country="in" category="sports"/>} ></Route>
          <Route exact path="/" element={<News  key="general" pageSize={6} country="in" category="general"/>} ></Route>
        </Routes>exact 
      </div>
      </BrowserRouter>
      </>
    );
  }
}

