import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slideData from "../../Services/slideData";
import "../home/home.css"

function Home(){

    return (
       <div className="home ui container">
            <Slides slides={slideData()}/>
            <Cards />
       </div>
    )
}
export default Home;