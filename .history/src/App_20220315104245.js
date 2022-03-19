import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import Home from "./components/header/Home";
import {Router, Route, Routes} from react-router-dom;


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>  
      </Routes>
      <Home/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
