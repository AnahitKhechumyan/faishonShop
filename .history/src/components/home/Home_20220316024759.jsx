import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slideData";
import "../home/home.css"

function Home(){

    return (
       <div className="home ui container">
            <Slides slides={slidesData()}/>
            <Cards />
       </div>
    )
}
export default Home;