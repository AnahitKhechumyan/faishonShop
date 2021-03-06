import { apiURL } from "../config";

//export async function getData(){
 // const response=await fetch("https://baby-island.herokuapp.com/homeproduct");
 // const data=await response.json();
 // return data;
//} 
export async function getProducts(){
  try{
      const response = await fetch(`${apiURL}/product`)
      const data = await response.json();
      return data;
  }catch(error){
      console.log("wrong", error);
  }
 
}

export async function getOrders(user_id, token){
  try {
      const response = await fetch(`${apiURL}/order/user-order`, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`,
              user_id: user_id
          }
      })
      return await response.json();
  }catch (error){
      console.log("wrong", error);
  }

}

 
export async function authoriseUser(user, token){
  const {sub:id, name, email, picture} = user;
  try{
      const response = await fetch(`${apiURL}login/signup`,{
          method: "POST",
          headers: {
              Authorization:`Bearer ${token}`,
              "Content-Type": "application/json;charset=utf-8",
              user_id: user,
          },
              body: JSON.stringify({
              id,
              name,
              email,
              picture,
            }),
      })
      return response.json();
  }catch(error){
      console.log("wrong post", error);
  }
}

export async function confirmOrder(user, product, token, option) {
    const { sub: id, name, email, picture } = user;
    const {address,paymentMethod,phone} = option;
  
    const body = {
        date:new Date().valueOf(),
      user: user,
      product: product,
      count: 1,
      
      orderStatus:paymentMethod==="cash" ? "UNPAID" : "PAID",
      address:address,
      phone:phone,
  
    };
    try {
      const response = await fetch(`${apiURL}order`, {
        method: "POST",      
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json;charset=utf-8",
          user_id: user,
        },
        body: JSON.stringify(body),
      });
      return response.json();
    } catch (error) {
      console.log("sxalPost", error);
    }
  }
  /*{
    "id": 20,
    "date": 1648036453270,
    "count": 1,
    "orderStatus": "UNPAID",
    "product": {
        "id": 9,
        "name": "Fanta",
        "price": 4.5,
        "description": {
            "id": 10,
            "comment": "Fanta is wery useful drink"
        },
        "currency": "AMD",
        "stock": {
            "id": 11,
            "isAvailable": true,
            "count": 600
        },
        "img": [
            {
                "id": 12,
                "imagePath": "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-world.net%2Ffanta-logo%2F&psig=AOvVaw1HIJVZDvW5u5KpJ91jV4Df&ust=1648018260941000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICg2suQ2fYCFQAAAAAdAAAAABAD"
            }
        ]
    },
    "user": {
        "id": "google-oauth2|115166180231991081171",
        "email": "galstyan.suren.1986@gmail.com",
        "name": "Suren Galstyan",
        "picture": "https://lh3.googleusercontent.com/a/AATXAJw0Xdp4HFC0gfIYzL8mJuImXWZvldNV7FsnmxEf=s96-c"
    }
    "address":"mec ashxarh",
     "phone":"094276700",
     "paymentMethod":"CASH"
}*/