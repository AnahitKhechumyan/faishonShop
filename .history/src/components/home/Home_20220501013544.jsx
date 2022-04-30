import Cards from "../card/Cards";
import Slides from "../Slide/Slides"
import slidesData from "../../Services/slidesData";
import "./home.css";
import {Message, Sticky } from "semantic-ui-react";
import { useState } from "react";

function Home() {
    const [responseInfo, setResponseInfo] = useState("");
  
    let countPageProduct = 3;
  
    function handleDismiss() {
      setResponseInfo("");
    }

  //   function startSlider(){
  //     sliderInterval = setInterval(goNext, 2500);
  // }
  
  //  function stopSlider(){
  //         clearInterval(sliderInterval);
  //     }
  
     let sliderInterval = null;
     function nextSlide(){
      sliderInterval  = setInterval(slidesData,3000)
     }
  
    return (
      <div className="home ui container">
        {responseInfo && responseInfo.length > 0 ? (
          <Sticky>  
            <Message  success onDismiss={handleDismiss} content={responseInfo} />
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