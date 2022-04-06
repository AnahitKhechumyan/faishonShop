import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slidesData";
import "./home.css";
import { useAuth0 } from "@auth0/auth0-react";

function Home(){
        const {user, isAuthenticated} = useAuth0();
    console.log(user);
    console.log(isAuthenticated);
    return (
       <div className="home main">
            <Slides  slides={slidesData()}/>
            <Cards />
       </div>
    );
}

export default Home;