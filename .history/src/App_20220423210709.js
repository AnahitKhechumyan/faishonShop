import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import LoginPage from "./components/login/LoginPage"; 
import Loading from "./components/loader/Loading";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {isLoading} = useAuth0()
  return (
    <BrowserRouter>
      <div className="App">
      {isLoading ? <Loading/>:
        <>
        <Header  className="ui fixed inverted main menu"/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={ <Products/> }></Route>
          <Route path="/dashboard" element={ <Dashboard />}></Route>
          <Route path="/login" element={ <LoginPage />}></Route>
        </Routes>
        <Footer />
        </>
        }
      </div>
    </BrowserRouter>
  );
}
export default App;









