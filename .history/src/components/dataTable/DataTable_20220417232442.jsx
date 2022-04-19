import { nanoid } from "nanoid";
import {  Grid, Segment, List, Image,Pagination, Icon,Dropdown, Item , Button } from "semantic-ui-react";
import productImg from "../Slide/img/img1.jpg";
import "./dataTable.css";
import { useState, useEffect, Fragment } from "react";

function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);
  const pageDevider = 5;
  
  function onChange(e) {
    setImgFile(e.target.files[0]);
  }
  useEffect(()=>{
    if(list && list.length>0)setResult(list);
  },[list])

  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);
  useEffect(() => {
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDevider));
      
  }, [start, result]);
  
  
  console.log("result", list);
  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }
  return (
    <>
    {productsByPage &&
      productsByPage.length > 0 &&
      productsByPage.map((item) => {
        return (
          <Grid className="grid-table" key={nanoid()}>
            <Grid.Row>
              {/* <Grid.Column width="2">
                <Segment.Inline>{item.id}</Segment.Inline>
              </Grid.Column> */}
              <Grid.Column width="8">
                <Segment.Inline>
                  <Image
                    avatar
                    className="product-icon"
                    src={
                      item.img[item.img.length - 1]?.imagePath || productImg
                    }
                  />

                  <Segment.Inline>{item.name}</Segment.Inline>
                  <Segment.Inline>
                    {item.price}
                    <span className="currency">{item.currency}</span>
                  </Segment.Inline>
                </Segment.Inline>
              </Grid.Column>
              <Grid.Column width="4" className="image-upload-form">
                <Segment.Inline >
                  {/* <List.Content > */}
                    {/* <List.Header > </List.Header> */}

                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        uploadImg(imgFile, item.id);
                      }}
                    >
                      {/* <Segment.Inline> */}
                        <label htmlFor="file-input" className="img-icon">
                          <Icon
                            className="btn-icon"
                            color="violet"
                            name="images"
                          />
                        </label>
                        <input
                          type="file"
                          id="file-input"
                          onChange={onChange}
                        />
                        <Button className="btn-upload" type="submit">
                          <Icon
                            className="btn-icon"
                            color="violet"
                            name="upload"
                          />
                        </Button>
                      {/* </Segment.Inline> */}
                    </form>
                  {/* </List.Content> */}
                </Segment.Inline>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
      })}
    <div className="pagination-container">
      <Pagination
        defaultActivePage={1}
        secondary
        onPageChange={goToPage}
        totalPages={Math.ceil(result.length / pageDevider)}
      />
    </div>
  </>
    /*<>
       {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          return (
            <Grid className="grid-table" key={nanoid()}>
              <Grid.Row>
               <Grid.Column width="2">
                  <Segment.Inline>{item.id}</Segment.Inline>
          </Grid.Column>
                <Grid.Column width="5">
                  <Segment.Inline>
                    <Image
                      avatar
                      className="product-icon"
                      src={
                        item.img[item.img.length - 1]?.imagePath || productImg
                      }
                    />
                  </Segment.Inline>
                </Grid.Column>
                <Grid.Column width="4" className="image-upload-form">
                  <Segment.Inline>
                    <List.Content>
                      <List.Header>{item.name} </List.Header>
                      {item.price}
                      {item.currency}
                       <Segment.Inline>"item.orderStatus"</Segment.Inline> 
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          uploadImg(imgFile, item.id);
                        }}
                      >
                        <label htmlFor="file-input" className="img-icon">
                            <Icon
                              className="btn-icon"
                              color="green"
                              name="images"
                            />
                          </label>
                          <input
                            type="file"
                            id="file-input"
                            onChange={onChange}
                          />
                          <Button className="btn-upload" type="submit">
                            <Icon
                              className="btn-icon"
                              color="green"
                              name="upload"
                            />
                          </Button>
                        <input type="file" onChange={onChange} />
                        <button type="submit">Upload!</button>
                      </form>
                    </List.Content>
                  </Segment.Inline>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          );
        })}
      <div className="pagination-container">
       
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / pageDevider)}
        />
      </div>
    </>*/
  );
}


export default DataTable;