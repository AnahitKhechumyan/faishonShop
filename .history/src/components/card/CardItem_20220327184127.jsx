
import React,{useState} from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import "./cardItem.css";
function CardItem({descriptions, image, name, price}){
  const [images, setImages] = useState([])

  const file = JSON.parse(image[0].imagePath)
 
    return (
        <Card centered>
         <Image src={image} height="200px" />
          {/* <Image src={""+img} height="200px" /> */}
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>
              {descriptions.comment}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          {price}
            {/* <a>
              <Icon name='user' />
              22 Friends
            </a> */}
          </Card.Content>
        </Card>
      )
}

export default CardItem;


/*function CardItem({description, image, name, price}){
    return (
        <Card centered>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
          {price}
            {/* <a>
              <Icon name='user' />
              22 Friends
            </a> //
          </Card.Content>
        </Card>
      )
}

export default CardItem;*/