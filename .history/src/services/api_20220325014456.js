import { apiUrl } from "../config";

//export async function getData(){
    //const response=await fetch("https://baby-island.herokuapp.com/homeproduct");
    //const data=await response.json();
   // return data;
//}

export async function getProducts() {
    const products = await fetch(`${apiUrl}/api/v1/product`)
    const data = await products.json();
    return data;
}
export async function getOrders(user_id, token) {
    try {
      const response = await fetch(`${apiUrl}order/user-order`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          user_id: user_id,
        },
        // body: JSON.stringify(user_id),
      });
    
      return await response.json();
    } catch (error) {
      console.log("sxal", error);
    }
  }
  
  export async function authoriseUser(user, token) {
    const { sub: id, name, email, picture } = user;
    try {
      const response = await fetch(`${apiUrl}login/signup`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json;charset=utf-8",
          user_id: user,
        },
        body: JSON.stringify({
          id,
          name,
          email,
          picture,
        }),
      });
      return response.json();
    } catch (error) {
      console.log("sxalPost", error);
    }
  }