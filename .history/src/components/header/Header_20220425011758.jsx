//import {Menu, Segment} from "semantic-ui-react";
import React ,{ useState } from "react";
import { createMedia } from "@artsy/fresnel";
import { Outlet, Link } from "react-router-dom";
import { Icon, Image, Menu, Sidebar, Dropdown }  from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";
import { nanoid } from "nanoid";

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
    <Sidebar.Pusher id="left-pusher" dimmed={visible} onClick={onPusherClick}>
        <Sidebar
        key={nanoid()}
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted="true"
          items={leftItems}
          vertical
          visible={visible}
        />
    </Sidebar.Pusher>

    <Sidebar.Pusher
    >
                   
                    <Menu fixed="top" inverted>
                        <Menu.Item key={nanoid()}>
                            <Image size="mini" src="https://seeklogo.com/images/G/girls-and-clothing-fashion-shop-logo-E38B5BAF74-seeklogo.com.png" />
                        </Menu.Item>
                        <Menu.Item onClick={onToggle} key={nanoid()}>
                            <Icon name="sidebar" />
                        </Menu.Item>

                        <Menu.Menu position="right" key="rightItems">
                            {rightItems.map((item, index) => {
                            if (item.children) {
                                return (
                                <Menu.Item key={`rightParams${index}`}>
                                  {item.children}
                                  </Menu.Item>
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
            
            <Menu  fixed="top" inverted>
                <Menu.Item key={nanoid()}>
                    <Image size="mini" src="https://seeklogo.com/images/G/girls-and-clothing-fashion-shop-logo-E38B5BAF74-seeklogo.com.png" />
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
        );
    };
  

     function NavBar({ leftItems, rightItems }) {
        const [visible, setVisible] = useState(false);
      
        const handlePusher = () => {
          if (visible) setVisible(false);
        };
        const handleToggle = () => setVisible(!visible);
      
        return (
          <div className="customHeader">
            <Media at="mobile">
              <NavBarMobile
                leftItems={leftItems}
                onPusherClick={handlePusher}
                onToggle={handleToggle}
                rightItems={rightItems}
                visible={visible}
              ></NavBarMobile>
            </Media>
      
            <Media greaterThan="mobile">
              <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
            </Media>
          </div>
        );
      }
    const leftItems = [
        { as: Link, to:"/", content: "Home", key: "home" },
        { as: Link, to:"/Products", content: "Products", key: "products" },
       // { as: Link, to:"/Reviews", content: "Reviews", key: "users" }
    ];
    const rightItems = [
      { as: Link, to: "/login", content: "Login", key: "login" }
  
    ];


function Header(){
    const {user, isAuthenticated, logout} = useAuth0();
    rightItems.length = 0;
    if(isAuthenticated){
        
        rightItems.push({
            children: [
              <Image avatar spaced="right" src={user.picture} key={nanoid()} />,
        <Dropdown pointing="top left" text={user.name} key="userDropdown">
          <Dropdown.Menu key="userDropdownMenu">
            <Dropdown.Item text={user.name} key={user.name} />
            <Dropdown.Item as={Link} to="/dashboard" text="Dashboard" key="userDashboard" />
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
                <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </NavBar>
            </MediaContextProvider>
    )
}
export default Header;
 