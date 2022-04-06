import { useState, useEffect, useContext, createContext } from "react"
const dataContext = createContext(null);
export function Parent(){
const [data, setData] = useState();
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(data=>{
            return data.json();
        })
        .then(response=>{
            setData(response);
        })
    },[])
    // console.log(data[0].name);
    return(
        <dataContext.Provider value={data}>
            <Child />
        <div>
            <h4>Parent component</h4>
        </div>
        </dataContext.Provider>
    )
}
function Child(){
    return(
        <div>
        <SubChild />
            <h4>Child component</h4>
        </div>
    )
}
function SubChild(){
    const getContext = useContext(dataContext);
    const  [newContext, setNewContext] = useState({...getContext})
    console.log(newContext);
    return(
        <div>
            {/* <h1>{getContext.borders[0]}</h1>
            <h4>{getContext.capital[0]}</h4> */}
            <h4>SubChild component</h4>
        </div>
    )
}














