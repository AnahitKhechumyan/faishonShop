import React, { useState } from "react";
import slidesData from "../../Services/slidesData";
import "./Slides.css";
import {Button, Icon} from "semantic-ui-react";


function Slides({slides}) {
    //const [slideData, setSlideData] = useState(slidesData());
    const [index, setIndex] = useState(0);
    function handleNext() {
        index !== slides.length -1? setIndex(index + 1): setIndex(0);
    }

    function handlePrev() {
        index !== 0? setIndex(index - 1): setIndex(slides.length - 1);    
    }
    /*function handlePrev(){

      (index !== 0) ? setIndex(--index) : setIndex(slides.length-1);
      
   }
 
   function handleNext(){
 
     (index !== slides.length-1) ? setIndex(++index) : setIndex(0);
 
    }*/
    
  return (
    <div>
      <div id="slide" className="text-center">
      <div className="slideImg"><img src={slides[index].image}  data-testid="title" />
      
        <Button  data-testid="button-prev" className="small left" onClick={()=> {
            handlePrev()
        }}>
             <Icon name = "chevron left" />
        </Button>
        <Button data-testid="button-next" className="small right" onClick={()=> {
            handleNext()
        }}>
            <Icon name = "chevron right" />
        </Button>
      </div>
      <div className="slideDescription"><p data-testid="text">{slides[index].text}</p></div>
      </div>
    </div>
  );
}

export default Slides;