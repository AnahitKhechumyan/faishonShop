import React, { useState } from "react";
import slidesData from "../../Services/slidesData";
import "./Slides.css";
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
        <button  data-testid="button-prev" className="small left" onClick={()=> {
            handlePrev()
        }}>
             <Icon name = "chevron left" />
        </button>
        <button data-testid="button-next" className="small right" onClick={()=> {
            handleNext()
        }}>
            <Icon name = "chevron right" />
        </button>
      </div>
      <div className="slideDescription"><p data-testid="text">{slideData[index].text}</p></div>
      </div>
    </div>
  );
}

export default Slides;