
import Cards from "../card/Cards";
import { Sticky, Message } from "semantic-ui-react";
import { useState } from "react";


function Products() {
  const [responseInfo, setResponseInfo] = useState("");

  let countPageProduct = 6;

  function handleDismiss() {
    setResponseInfo("");
  }
  return (
    <div className="home ui container">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky >
           <Message success onDismiss={handleDismiss} content={responseInfo} />
      </Sticky>
       
      ) : (
        ""
      )}
      
      <Cards pageDevider={countPageProduct}
       setResponseInfo={setResponseInfo}
       
      />
    </div>
  );
}

export default Products;