//import {Menu, Segment} from "semantic-ui-react";
import { useState } from "react";
import { createMedia } from "@artsy/fresnel";
import React from "react";
import { /*Outlet,*/ Link } from "react-router-dom";
import { Icon, Image, Menu, Sidebar, Dropdown }  from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
   
const AppMedia = createMedia({
        breakpoints: {
            mobile: 320,
            tablet: 768,
            computer: 992,
            largeScreen: 1200,
            widescreen: 1920
        }
    });
    const { Media, MediaContextProvider } = AppMedia;
    console.log("Media",Media);
    console.log("MediaContextProvider",MediaContextProvider);
    console.log("AppMedia",AppMedia);
    const NavBarMobile = (props) => {
        const {
            children,
            leftItems,
            onPusherClick,
            onToggle,
            rightItems,
            visible
        } = props;
        return (
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    items={leftItems}
                    vertical
                    visible={visible}
                />
                <Sidebar.Pusher
                    dimmed={visible}
                    onClick={onPusherClick}
                    style={{ minHeight: "100vh" }}
                >
                   
                    <Menu fixed="top">
                        <Menu.Item>
                            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
                        </Menu.Item>
                        <Menu.Item onClick={onToggle}>
                            <Icon name="sidebar" />
                        </Menu.Item>
                        <Menu.Menu position="right" key="rightItems">
                            {rightItems.map((item, index) => {
                            if (item.children) {
                                return (
                                <Menu.Item key={`rightParams${index}`}>{item.children}</Menu.Item>
                                );
                            }
                            return <Menu.Item key={index} {...item.link} />;
                            })}
                        </Menu.Menu>
                    </Menu>
                    
                     {children}
                   
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    };
    const NavBarDesktop = (props) => {
        const { leftItems, rightItems } = props;
        return (
            <>
            <Menu  fixed="top">
                <Menu.Item>
                    <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
                </Menu.Item>
                {leftItems.map((item, index) => (
                    <Menu.Item {...item}  key={index}/>
                ))}
             <Menu.Menu position="right" key="rightItems">
                {rightItems.map((item, index) => {
                if (item.children) {
                    return (
                    <Menu.Item key={`rightParams${index}`}>{item.children}</Menu.Item>
                    );
                }
                return <Menu.Item key={index} {...item.link} />;
                })}
            </Menu.Menu>
            </Menu>
            </>
        );
    };
function NavBar({leftItems, rightItems }){
    const [visible, setVisible] = useState(false)
    const handlePusher = () => {
        if (visible) setVisible(false);
    }
   const handleToggle = () =>  setVisible(!visible);
            return (
                    <>
                    <Media at="mobile">
                        <NavBarMobile
                            leftItems={leftItems}
                            onPusherClick={handlePusher}
                            onToggle={handleToggle}
                            rightItems={rightItems}
                            visible={visible}
                        >
                        </NavBarMobile>
                    </Media>
                    <Media greaterThan="mobile">
                        <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
                    </Media>
                    </>
            );
        };
    // }
    const leftItems = [
        { as: Link, to:"/", content: "Home", key: "home" },
        { as: Link, to:"/Products", content: "Products", key: "users" },
        { as: Link, to:"/Reviews", content: "Reviews", key: "users" }
    ];
    const rightItems = [
        { as: Link, to:"/login", content: "Login", key: "login" },
        // { as: Link, to:"/register", content: "Register", key: "register" }
    ];
function Header(){
    const {user, isAuthenticated, logout} = useAuth0()
    rightItems.length = 0;
    if(isAuthenticated){
        console.log(user);
        rightItems.push({
            children: [
              <Image avatar spaced="right" src={user.picture} />,
              <Dropdown pointing="top left" text="Username" key="userDropdown">
                <Dropdown.Menu key="userDropdownMenu">
                  <Dropdown.Item text={user.name} key={user.name} />
                  <Dropdown.Item  text="Dashboard" key="userDashboard" />
                  <Dropdown.Item onClick={logout} text="Sign out" icon="power" key="userSignout"/>
                </Dropdown.Menu>
              </Dropdown>
            ],
          });
            //  rightItems.push( `<div>user.name</div>, <button onClick={()=> logout()}>Logout</button>`);
         } else {
            //   rightItems.push({ as: Link, to:"/login", content: "Login", key: "login" });
              rightItems.push({
                link: { as: Link, to: "/login", content: "Login", key: "login" },
              });
         }
    return(
            <MediaContextProvider>
                <NavBar leftItems={leftItems} rightItems={rightItems}>
                </NavBar>
            </MediaContextProvider>
    )
}
export default Header;
/*import React from "react";
import { createMedia } from "@artsy/fresnel";
import { Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
 
const AppMedia = createMedia({
    breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
  const {
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
  } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {rightItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <Menu fixed="top" inverted>
      <Menu.Item>
        <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>

      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

     {/* <Menu.Menu position="right">
        {rightItems.map((item) => (
          <Menu.Item {...item} />
        ))}
        </Menu.Menu>
       /* <Menu.Menu position="right" key="rightItems">
        {rightItems.map((item, index) => {
          if (item.children) {
            return (
              <Menu.Item key={`rightParams${index}`}>{item.children}</Menu.Item>
            );
          }
          return <Menu.Item key={index} {...item.link} />;
        })}
      </Menu.Menu>
    </Menu>
  );
};


class NavBar extends React.Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Media at="mobile">
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >

          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
        </Media>
      </div>
    );
  }
}

const leftItems = [
  { as: Link, to: "/",content: "Home", key: "home" },
  { as: Link, to: "/products",content: "Products", key: "products" },
  { as: Link, to: "/review",content: "Review", key: "review" }
];
const rightItems = [
 // { as: Link,to: "/Login",content: "Login", key: "login" },
];


function Header() {
    
  const {user, isAuthenticated, logout} = useAuth0();
  console.log(user);
  console.log(isAuthenticated);

  rightItems.length = 0;
  if(isAuthenticated){

    rightItems.push({
      children: [
        <div key={user.sub}>{user.name}</div>,
        <button key="logout" onClick={() => logout()}>
          Logout
        </button>,
      ],
    });
     // rightItems.push ({ as: Link, to: "/login", content: "Log Out", key: "login" })
      // rightItems.push(`<div>user.name</div>`,
      //   `<button onClick={()=> logout()}>Logout<button></button>`);
  }
  else {
      //rightItems.push ({ as: Link, to: "/login", content: "Login", key: "login" });
      rightItems.push({
        link: { as: Link, to: "/login", content: "Login", key: "login" },
      });
  }

  return (
      <MediaContextProvider>
    <NavBar leftItems={leftItems} rightItems={rightItems}>
      <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
    </NavBar>
  </MediaContextProvider>
  )
}
    
export default Header;
 */