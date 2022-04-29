import {
    Container,
    Grid,
    Header,
    List,
    Segment, 
    Image,
    Icon,
  } from 'semantic-ui-react';
import "./Footer.css";
 
function Footer(){
    return (
        
        <div className="footer-style">
            <Segment  vertical>
        <Container>
          <Grid divided  stackable >
            <Grid.Row>
            <Grid.Column width={4}>
                <Header inverted as='h4' content='Contact Us' />
                <List link inverted>
                  <List.Item href="https://www.facebook.com/" as='a'>
                    <Icon name='facebook' />
                  </List.Item>
                  <List.Item href="https://www.linkedin.com/in/narek-tom/" as='a'>
                    <Icon name='linkedin' />
                    </List.Item>
                  <List.Item href="https://github.com/NarekTovmasyan" as='a'>
                    <Icon name='github' />
                    </List.Item>
                  <List.Item as='a'><Icon name='phone' />+374 44 14 80 00</List.Item>
                </List>
              </Grid.Column>
              {/*<Grid.Column width={3}>
                <Header  as='h4'  inverted content='About' />
                <List link >
                  <List.Item as='a'  inverted>Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header   as='h4' inverted='true' content='Services' />
                <List link >
                  <List.Item as='a'>Shipment</List.Item>
                </List>
    </Grid.Column>*/}
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Available in 24/7 mode.
                </Header>
                <p>
                  Everything is done to save your time!
                </p>
              </Grid.Column>
              <Grid.Column width={3}>
                 <Image src="https://seeklogo.com/images/G/girls-and-clothing-fashion-shop-logo-E38B5BAF74-seeklogo.com.png" /> 
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
        </div>
    )
}

export default Footer;