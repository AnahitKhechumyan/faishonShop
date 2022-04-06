import "./dashbord.css";
import { getOrders, authoriseUser } from "../../Services/api";
import { useAuth0 } from "@auth0/auth0-react";

function Dashbord() {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
  (async function () {
    try {
      const token = await getAccessTokenSilently();
      const data = await getOrders(user.sub, token);
    
      if (data && Array.isArray(data)) {
        console.log("data", data);
        //render anel orderner@
      } else if (data && data.status === 401) {
        //   stugel inch enq stacel
        const authorised = await authoriseUser(user, token);
        console.log("authorised", authorised);
      }else{
        console.log("hajox")
      }
    } catch (error) {
      console.log("user not authorised");
    }
  })();
  return <div className="dashbord ui container">it's dashbord</div>;
}

export default Dashbord;