import React, { useState } from "react";
import slidesData from "../../Services/slidesData";
import "./Slides.css";
import {Button, Icon} from "semantic-ui-react";

function Slides() {
    const [slideData, setSlideData] = useState(slidesData());
    const [index, setIndex] = useState(0);
     
    
    function handleNext() {
      index !== slideData.length -1? setIndex(index + 1): setIndex(0);
  }
    function handlePrev() {
        index !== 0? setIndex(index - 1): setIndex(slideData.length - 1);    
    }
    
    function nextSlide() {
        setIndex(index + 1); 
  }
    let sliderInterval = null; 
    function startSlider(){
          sliderInterval = setInterval(nextSlide, 5000);
    }


  return (
    <div>
      <div id="slide" className="text-center">
      <div className="slideImg" > <img src={slideData[index].image}  />
        
        <Button  data-testid="button-prev" className="small left" onClick={()=> {
           // handlePrev()
           //startSlider()
            
        }}>
             <Icon name = "chevron left" />
        </Button>
        <Button data-testid="button-next" className="small right" onClick={()=> {
           // handleNext()
           startSlider()
             
        }}>
            <Icon name = "chevron right" />
        </Button>
      </div>
      <div className="slideDescription"><p className="size" data-testid="text">{slideData[index].text}</p></div>   
      </div>    
    </div>
  );
}

export default Slides;