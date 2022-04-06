import React, { useState } from "react";
import slidesData from "../../Services/slidesData";
import "./Slides.css";
import {Button, Icon} from "semantic-ui-react";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faarrowcircleleft, faarrowcircleright } from "@fortawesome/free-solid-svg-icons";



function Slides() {
    const [slideData, setSlideData] = useState(slidesData());
    const [index, setIndex] = useState(0);
    function handleNext() {
        index !== slideData.length -1? setIndex(index + 1): setIndex(0);
    }

    function handlePrev() {
        index !== 0? setIndex(index - 1): setIndex(slideData.length - 1);    
    }
    
  return (
    <div>
      <div id="slide" className="text-center">
      <div className="slideImg"><img src={slideData[index].image} />
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
      <div className="slideDescription"><p data-testid="text">{slideData[index].text}</p></div>
      </div>
    </div>
  );
}

export default Slides;