
import React/*,{useState}*/ from "react";
import { Card, Icon, Image,Button } from 'semantic-ui-react'
import "./cardItem.css";
import BuyProduct from "../buyProduct/BuyProduct";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from "react-router-dom";

function CardItem({description, image, name, price, item}){
  //const [images, setImages] = useState([])
  //const file = JSON.parse(image[0].imagePath)
  const {isAuthenticated,user} =useAuth0();
    return (
        <Card centered>
         {/*<img src={image[0].imagePath} height="200px" />*/}
          {/* <Image src={""+img} height="200px" /> */}
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
            <Card.Description>
              {description.comment}
            </Card.Description>
          </Card.Content>
          <Card.Content extra className="buy-info">
          {price}
          {isAuthenticated ? (
          <BuyProduct item = {item} productInfo={{description, image, name, price}} />
          
        ) : (
          <Button as={Link} to="/login" color="green" inverted floated="right">
            BUY
          </Button>
        )}
        {/* <a>
              <Icon name='user' />
              22 Friends
            </a> */}
          </Card.Content>
        </Card>
      );
}

export default CardItem;


 