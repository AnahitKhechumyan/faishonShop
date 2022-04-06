import React, {useState,useEffect, useContext, createContext} from "react";

export default function  Parent(){
    const [data, setData] = useState([]);

    useEffect(()=>{
         fetch("https://restcountries.com/v3.1/all")
         .then(data=>{
             return data.json();
         })
         .then(response=>{
             setData(response);
         })
    },[])
    return(
        <dataContext.Provider value={data[0]}>
            <Child/>
         <div>
            <h4>Parent Component</h4>
        </div>
        </dataContext.Provider>
         
    )
}

function Child(){
    return(
        <div> 
        <SubChild/>
        <h4>Child Component</h4>
        </div>
    )
}

function SubChild(){
    const getContext =useContext(dataContext);

    return(
        <div> 
        <h4>SubChild Component</h4>
        </div>
    )
}