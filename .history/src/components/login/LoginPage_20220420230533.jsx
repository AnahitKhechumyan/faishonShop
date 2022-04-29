import { useAuth0 } from "@auth0/auth0-react";
import "./loginPage.css";
import productImg from "../Slide/img/img7.jpg";
import {} from "semantic-ui-react";

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

    return <button  className="login"  onClick={() => loginWithRedirect()}>Log In</button>;
}
function LoginPage() {
    return (
        <div className="login-body">
         <Image src = {productImg}/>
        <div className="main" style={{paddingTop:"100px"}}>
            <LoginButton />
        </div>
        </div>
    )
}
export default LoginPage;