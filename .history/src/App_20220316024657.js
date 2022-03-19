
import Footer from "./components/footer/Footer";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import { Route, BrowserRouter, Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Header className="ui fixed inverted main menu"/>
     <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>  
     </Routes>
    
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
