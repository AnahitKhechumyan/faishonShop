import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import Products from "./components/products/Products";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
//import User from "./components/User";

function App(slides) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="ui fixed inverted main menu" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={ <Products/> }/>
          <Route path="/dashboard" element={ <Dashboard />} />
          <Route path="/login" element={ <LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;









