/*import React from "react";
import "h8k-components";

const title = "Slideshow App";

function Slides({ slides }) {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="slides">
        <Slides slides={slides}/>
      </div>
    </div>
  );
}

export default Slides;*/
import React from "react";

function Slides({ slides }) {
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined">
          Restart
        </button>
        <button data-testid="button-prev" className="small">
          Prev
        </button>
        <button data-testid="button-next" className="small">
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">Slide Title Here</h1>
        <p data-testid="text">Slide Text Here</p>
      </div>
    </div>
  );
}

export default Slides;

