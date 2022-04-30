import { nanoid } from "nanoid";
import {Item, Dropdown} from "semantic-ui-react";
import productImg from "../Slide/img/img1.jpg";
import "./dataTable.css";
import { useEffect, useState } from "react";

function PendingTable({ list, changeStatus}) {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 4;

   
  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);
  useEffect(()=>{
    if(list && list.length>0)setResult(list);
  },[list])
  function goToPage(e, data) {
    setStart(data.activePage * pageDevider - pageDevider);
  }
  return (
    <>
       {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          return (
            <Item.Group className="" key={nanoid()}>
              <Item>
                <Item.Image className="pending17"
                  size="tiny"
                  src={item.product.img[0]?.imagePath || productImg}
                />
                <Item.Content className="pending19">
                  <Item.Header as="a"> {item.product.name}</Item.Header>
                  <Item.Description>
                    {item.product.description.comment}
                  </Item.Description>                  
                </Item.Content>

                <Item.Content className="pending16">
                  <Item.Description>Address {item.address}</Item.Description>
                  <Item.Extra>Phone {item.phone}</Item.Extra>
                </Item.Content>
                <Item.Content className="pending16">
                Available {item.product.stock.count}
                </Item.Content>

                <Item.Content className="pending16">
                  
                  <Dropdown pointing="top left" text="Change Status">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("PENDING", item.id);
                        }}
                        text="Pending"
                        icon="plus"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("SENT", item.id);
                        }}
                        text="Sent"
                        icon="calendar"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("PAID", item.id);
                        }}
                        text="Paid"
                        icon="calendar"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("DONE", item.id);
                        }}
                        text="Done"
                        icon="calendar"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                  
                </Item.Content >
                <Item.Content className="pending16">{item.orderStatus} </Item.Content>
              </Item>
            </Item.Group>
             
          );
        })}
    </>
  );
}

export default PendingTable;