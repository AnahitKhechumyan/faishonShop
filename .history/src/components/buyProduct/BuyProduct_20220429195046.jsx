import React, { useState, useEffect } from "react";
import { Button, Form, Header, Image, Modal, Segment } from "semantic-ui-react";
import BuyForm from "./BuyForm";
import "./BuyProduct.css";
import { confirmOrder } from "../../Services/api";
import { getOrdersByUserId } from "../../Services/api";
import { useAuth0 } from "@auth0/auth0-react";
import productImg from "../Slide/img/img1.jpg";

function BuyProduct({ productInfo, item, setResponseInfo, stock }) {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  const { description, image, name, price } = productInfo;

  const [open, setOpen] = useState(false);
  const inintFormData = { address: "", phone: "", paymentMethod: "cash" };
  const [options, setOptions] = useState(inintFormData);
  const [disabled, setDisabled] = useState(true);
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
      setResponseInfo( "buying product");
     // (`You buy the product ${prodName[0].product.name}`);

      console.log(orderStatus);
    } catch (error) {
      console.log(error);
    }
  }
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

    setDisabled(status);
  }, [options, open]);

  function resetOptions() {
    for (let key in options) {
      if (key != "paymentMethod") {
        options[key] = "";
      }
    }
  }

  function changeOptions(prop) {
    console.log("prop", prop);
    setOptions({ ...options, ...prop });
  }

  return (
    <Modal
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button
          color="violet"
          inverted
          floated="right"
          disabled={stock < 1 ? true : false}
        >
          BUY
        </Button>
      }
    >
      <Modal.Content image>
        <Image
          className="image-modal"
          size="medium"
          src={
            image
              ? image.imagePath
              : productImg ||
                "https://react.semantic-ui.com/images/avatar/large/rachel.png"
          }
          wrapped
        />
        <Modal.Description className="name-desc">
          <Header>{name}</Header>
          <p>{description}</p>
          <p className="price-prodct">
            {price + "AMD"}
            <span className="currency">{item.currency}</span>
          </p>
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
              disabled={disabled}
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setOpen(false);
                setDisabled(true);
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
