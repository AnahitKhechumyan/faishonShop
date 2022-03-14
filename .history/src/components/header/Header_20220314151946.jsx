import React from "react";
import { Menu, Segment } from "semantic-ui-react";

function Header(){
    return(
      <div>
      <Menu stackable>
      <Menu.Item>
        <img src='/logo.png' />
      </Menu.Item>
      <Menu.Item>Features</Menu.Item>
      <Menu.Item>Testimonials</Menu.Item>
      <Menu.Item>Sign-in</Menu.Item>
    </Menu>
      </div>
    )
}
export default Header;

 