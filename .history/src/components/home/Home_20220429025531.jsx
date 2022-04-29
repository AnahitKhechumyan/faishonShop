import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slidesData";
import "./home.css";
import { Table, Icon, Message, Sticky } from "semantic-ui-react";
import { useEffect, useState } from "react";

//import { useAuth0 } from "@auth0/auth0-react";

/*const  Home = ()=>{
    const [responseInfo, setResponseInfo] = useState("");
        //const {user, isAuthenticated} = useAuth0();
        let countPageProduct = 3;
    return (
       <div className="home ui container">
            <Slides slides={slidesData()}/>
            <Cards pageDevider={countPageProduct}/>
            
       </div>
    );
}*/
function Home() {
    const [responseInfo, setResponseInfo] = useState("");
  
    let countPageProduct = 4;
  
    function handleDismiss() {
      setResponseInfo("");
    }
    return (
      <div className="home ui container">
        {responseInfo && responseInfo.length > 0 ? (
          <Sticky>
            
            <Message success onDismiss={handleDismiss} content={responseInfo} />
          </Sticky>
        ) : (
          ""
        )}
        <Slides slides={slidesData()} />
  
        <Cards pageDevider={countPageProduct} setResponseInfo={setResponseInfo} />
      </div>
    );
  }

export default Home;