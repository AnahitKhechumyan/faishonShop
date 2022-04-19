import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slidesData";
import "./home.css";
//import { useAuth0 } from "@auth0/auth0-react";

const  Home = ()=>{
        //const {user, isAuthenticated} = useAuth0();
        let countPageProduct = 5;
    return (
       <div className="home ui container">
            <Slides slides={slidesData()}/>
            <Cards pageDevider={countPageProduct}/>
       </div>
    );
}

export default Home;