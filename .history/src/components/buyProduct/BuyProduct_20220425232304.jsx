import React, { useState, useEffect } from "react";
import { Button, Form, Header, Image, Modal, Segment } from "semantic-ui-react";
import BuyForm from "./BuyForm"
import "./BuyProduct.css";
import { confirmOrder } from "../../Services/api";
import { useAuth0 } from "@auth0/auth0-react";
import productImg from "../Slide/img/img1.jpg";
import { getOrdersByUserId } from "../../Services/api";


function BuyProduct({ productInfo, item, setResponseInfo, stock }) {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  const { description, image, name, price } = productInfo;

  const [open, setOpen] = useState(false);
  const inintFormData = { address: "", phone: "", paymentMethod: "cash" };
  const [options, setOptions] = useState(inintFormData);
  const [disable, setDisable] = useState(true);
  const [countProduct, setCountProduct] = useState(stock);


  async function confirmAction() {
    try {
      const token = await getAccessTokenSilently();
      const userObj = {
        id: user.sub,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      const orderStatus = await confirmOrder(userObj, item, token, options);
      const getOrderName = await getOrdersByUserId(userObj.id, token);
      const prodName = getOrderName.filter(
        (item) => item.id == orderStatus.info.OrderId
      );

      setResponseInfo(`You buy the product ${prodName[0].product.name}`);

      console.log(orderStatus);
    } catch (error) {
      console.log(error);
    }
  }

 /* useEffect(() => {
    let status = false;
    for(let key in options){
      if(!options[key] ){
        status = true;
      }
    }
      setDisable(status);
  }, [options]);*/
  useEffect(() => {
    if (open === false) {
      resetOptions();
    }
    
    let status = false;
    for (let key in options) {
      if (!options[key] && key !== "paymentMethod") {
        status = true;
      }
    }

    setDisable(status);
  }, [options, open]);

  function resetOptions() {
    for (let key in options) {
      if (key != "paymentMethod") {
        options[key] = "";
      }
    }
  }
  
  function changeOptions(prop) {
    console.log("prop",prop);
    setOptions({ ...options, ...prop });
  }

  return (
    <Modal
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        countProduct ? (
          <Button color="violet" inverted floated="right">
            BUY
          </Button>
        ) : (
          <Button disabled={true} color="violet" inverted floated="right">
            BUY
          </Button>
        )   
      }
    >
      <Modal.Content image>
        <Image
          size="medium"
          /*src= {image?image.imagePath: productImg*/
            src= {image   || 
          "https://react.semantic-ui.com/images/avatar/large/rachel.png"}
      
        />
        <Modal.Description>
          <Header>{name}</Header>
          <p>{description}</p>
          <p>{price + "AMD"}</p>
        </Modal.Description>

        <BuyForm userName={user.name} changeOptions={changeOptions} />
      </Modal.Content>
      <Modal.Actions>
        <Segment>
          <Segment.Inline>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
            color="violet"
              content="Confirm"
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setOpen(false);
                confirmAction();
              }}
               
            />
          </Segment.Inline>
        </Segment>
      </Modal.Actions>
    </Modal>
  );
}

export default BuyProduct;