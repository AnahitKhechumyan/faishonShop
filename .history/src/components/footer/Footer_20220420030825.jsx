import {
    Container,
    Grid,
    Header,
    List,
    Segment
  } from 'semantic-ui-react';
import "./Footer.css";

function Footer(){
    return (
        
        <div className="footer-style">
            <Segment  vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided  stackable >
            <Grid.Row>
              <Grid.Column width={3}>
                <Header  as='h4' content='About' />
                <List link >
                  <List.Item as='a'  inverted>Contact Us</List.Item>         
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header   as='h4' inverted content='Services' />
                <List link >
                  <List.Item as='a'>Shipment</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Available in 24/7 mode.
                </Header>
                <h4>
                  Everything is done to save your time!
                </h4>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
        </div>
    )
}

export default Footer;