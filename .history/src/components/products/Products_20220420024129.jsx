 import Cards from "../card/Cards";
//import { Label } from "semantic-ui-react";

function Products(){
    let countPageProduct = 6;
    return(
        <div className="home ui container">
        <Cards pageDevider={countPageProduct} />
      </div>
    )
}
export default Products;