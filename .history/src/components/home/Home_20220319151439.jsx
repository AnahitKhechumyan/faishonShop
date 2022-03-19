import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slideData from "../../Services/slideData";
import "./home.css";
import { useAuth0 } from "@auth0/auth0-react";

function Home(){
    const Home = () => {
        const {user, isAuthenticated} = useAuth0();
    console.log(user);
    console.log(isAuthenticated);
    return (
       <div className="home ui container">
            <Slides slides={slideData()}/>
            <Cards />
       </div>
    )
}
export default Home;