import React, { useState } from "react";
import { Button, Modal, Segment } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import AddProductsForm from "./AddProductsForm";
import { confirmAddProduct } from "../../Services/api";
import "./addProducts.css";

function AddProduct({ setResponseInfo }) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [open, setOpen] = useState(false);
  const initFormData = {
    productName: "",
    productPrice: "",
    productCurrency: "AMD",
    productDescription: "",
    productCount: "",
  };
  const [options, setOptions] = useState(initFormData);

  function changeOptions(prop) {
    setOptions({ ...options, ...prop });
  }
  async function confirmProduct(userId) {
    try {
      const token = await getAccessTokenSilently();

      const productObj = {
        name: options.productName,
        price: options.productPrice,
        currency: options.productCurrency,
        description: {
          comment: options.productDescription,
        },
        stock: {
          isAvailable: true,
          count: options.productCount,
        },
      };

      const orderStatus = await confirmAddProduct(productObj, userId, token);
      if (orderStatus.httpStatus && orderStatus.httpStatus === "OK") {
        setResponseInfo(orderStatus.message);
      }
      console.log(orderStatus);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add New Product</Button>}
    >
      <Modal.Content>
        <AddProductsForm changeOptions={changeOptions} />
      </Modal.Content>
      <Modal.Actions>
        <Segment>
          <Segment.Inline>
            <Button color="black" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              color="violet"
              content="Confirm"
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setOpen(false);
                confirmProduct(user.sub);
              }}
            />
          </Segment.Inline>
        </Segment>
      </Modal.Actions>
    </Modal>
  );
}

export default AddProduct;
