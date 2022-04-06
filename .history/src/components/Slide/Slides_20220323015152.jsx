import React, { useState } from "react";
import slidesData from "../../Services/slidesData";
import "./Slides.css";
//<link rel="stylesheet" href="fonts/fontawesome/css/all.min.css">
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faarrowcircleleft, faarrowcircleright } from "@fortawesome/free-solid-svg-icons";



function Slides() {
    const [slideData, setSlideData] = useState(slidesData());
    const [index, setIndex] = useState(0);
    function handleNext() {
        index !== slideData.length -1? setIndex(index + 1): setIndex(0);
    }

    function handlePrev() {
        index !== 0? setIndex(index - 1): setIndex(slideData.length - 1);    
    }

    function handleRestart() {
        setIndex(0);
    }
    
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={() => {
            handleRestart();
        }}>
          Restart
        </button>
        <button  data-testid="button-prev" className="small" onClick={()=> {
            handlePrev()
        }}>
            <FontAwesomeIcon icon={faarrowcircleleft} />
        </button>
        <button data-testid="button-next" className="small" onClick={()=> {
            handleNext()
        }}>
           <FontAwesomeIcon icon={faarrowcircleright} />
        </button>
      </div>
      <div id="slide" className="card text-center">
        <img src={slideData[index].image} />
        <p data-testid="text">Slide Text Here</p>
      </div>
    </div>
  );
}

export default Slides;

/*import { useState } from "react";

function Slides({ slides }) {

  let [index, setIndex] = useState(0);

  function showPrev(){

     (index !== 0) ? setIndex(--index) : setIndex(slides.length-1);
     console.log(" i em prev index", index)

  }

  function showNext(){

    (index !== slides.length-1) ? setIndex(++index) : setIndex(0);
    console.log(" i am next index", index)

   }

   function restart(){
     
    setIndex(0);
    console.log("Restart ", index);

   }
   return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={()=>{
            restart()
        }}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={()=>{
          showPrev()
        }}>
        </button>
        <button data-testid="button-next" className="small" onClick={()=>{
          showNext()
        }}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <img src={slides[index].image} data-testid="title"/>
        {/* <p data-testid="text">Slide Text Here</p> 
      /*</div>
    </div>
  );
}

export default Slides;*/