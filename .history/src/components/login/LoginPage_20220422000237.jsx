import { useAuth0 } from "@auth0/auth0-react";
import "./loginPage.css";
import productImg from "../Slide/img/img7.jpg";
import {Image,Button,Message} from "semantic-ui-react";

function LoginPage(){

    const { loginWithRedirect } = useAuth0();
    return (
        <div className="login-body">
          <Image src = {productImg}/>
          <div className="main">
          <Button className="login" onClick={() => loginWithRedirect()}>Log In</Button>
          <Message className="massage-login" color='violet'>Please, Subscribe if you want to  buy a product</Message>
        </div>
         
        </div>
    )
}
export default LoginPage;