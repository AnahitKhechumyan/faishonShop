import React, { useEffect, useState } from "react";
import { /*getData*/ getProducts } from "../../Services/api";
import CardItem from "./CardItem";
import "./cards.css";

const Cards = () => {
  const [result, setResult] = useState([]);
  console.log(result);
  useEffect(() => {
     getProducts().then((param) => {
        setResult(param);
      });
  }, []);

  return (
    <div className="ui stackable three column grid">

      {result.map((item) => {
           
        return (
          <CardItem 
            key={item.id}
            description={item.description}
            image={item.img}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Cards;