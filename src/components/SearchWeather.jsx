import React from 'react'
import { useState, useEffect } from 'react'

function SearchWeather() {
    const [search, setSearch] = useState("London");
    const [data, setData] = useState();
    const [input, setInput] = useState("");
    const [isLoading, setisLoading] = useState(true);
    let componentMounted = true;
    

    useEffect(() => {

        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Malaysia&appid=dcdc6c61f81f036b85b374ed7ff30f6e`);
            const data = await response.json()
            setData(data);
            console.log(data);
        }
        fetchWeather();

    }, [input]);


    

    return (
    <>
        {
            (typeof data != undefined) ? ( <p>{data.name}</p>) : (<p>Loding</p>)
            
        }
       </> 
       
    )
}

export default SearchWeather