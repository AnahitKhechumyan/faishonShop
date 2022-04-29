import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slidesData";
import "./home.css";
import {Image }  from "semantic-ui-react";
//import { useAuth0 } from "@auth0/auth0-react";

const  Home = ()=>{
        //const {user, isAuthenticated} = useAuth0();
        let countPageProduct = 6;
    return (
       <div className="home ui container">
            <Slides slides={slidesData()}/>
            <Image size="middle" src="https://seeklogo.com/images/G/girls-and-clothing-fashion-shop-logo-E38B5BAF74-seeklogo.com.png" /> 
            <Cards pageDevider={countPageProduct}/>
            
       </div>
    );
}

export default Home;