import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slidesData";
import "./home.css";
//import { useAuth0 } from "@auth0/auth0-react";

const  Home = ()=>{
        //const {user, isAuthenticated} = useAuth0();
        let countPageProduct = 6;
    return (
       <div className="home ui container">
            <Slides slides={slidesData()}/>
            <Cards pageDevider={countPageProduct}/>
            <Image size="middle" src="https://seeklogo.com/images/G/girls-and-clothing-fashion-shop-logo-E38B5BAF74-seeklogo.com.png" /> 
       </div>
    );
}

export default Home;