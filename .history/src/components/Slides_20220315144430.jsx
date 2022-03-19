import React from "react";
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

export default Slides;
