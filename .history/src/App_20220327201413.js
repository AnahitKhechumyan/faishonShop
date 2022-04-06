import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
//import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={ <Products/> }></Route>
          <Route path="/dashboard" element={ <Dashboard />}></Route>
          <Route path="/login" element={ <LoginPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;









