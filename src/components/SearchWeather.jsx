import React from 'react'
import { useState, useEffect } from 'react'

function SearchWeather() {
    const [search, setSearch] = useState("Malaysia");
    const [data, setData] = useState();
    const [input, setInput] = useState("");
    const [isLoading, setisLoading] = useState(true);


    useEffect(() => {

        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=dcdc6c61f81f036b85b374ed7ff30f6e&units=metric`);
            const data = await response.json()
            setData(data);
            console.log(data);
            setisLoading(false);
        }
        fetchWeather();

    }, [search]);

    // let emoji = "fa-cloud";
    // var iconcode = data.weather[0].icon;
    // console.log(iconcode);
    // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    // "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"

    // let temp = (data.main.temp - 273.15).toFixed(2);
    // let temp_min = (data.main.temp_min - 273.15).toFixed(2);
    // let temp_max = (data.main.temp_max - 273.15).toFixed(2);

    // Date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default", { month: 'long' });
    let day = d.toLocaleString("default", { weekday: 'long' });

    // Time
    let time = d.toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Handling Events
    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(input);
    }

    return (
        <>
            {
                isLoading ? (
                    <div className="container-fluid d-flex  align-items-center justify-content-center" style={{ height: '100vh', width: '100vw' }}>
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (<div>

                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div class="card text-white text-center border-0">
                                    <img src={`https://source.unsplash.com/random/600x900/?${data.weather[0].main},nature`} class="card-img" alt="..." />
                                    <div class="card-img-overlay">
                                        <form onSubmit={handleSubmit}>
                                            <div class="input-group mb-3 w-75 mx-auto">
                                                <input type="search" class="form-control" id="search" placeholder="Search City" aria-label="RSearch City"
                                                    aria-describedby="basic-addon2" name="search" value={input} onChange={(e) => setInput(e.target.value)} required autoComplete='off' />
                                                <button type="submit" class="input-group-text" id="basic-addon2">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </form>
                                        <div className="bg-dark bg-opacity-50 py-3">
                                            <h2 class="card-title">{data.name}</h2>
                                            <p class="card-text lead">
                                                {day}, {month} {date}, {year}
                                                <br />
                                                {time}
                                            </p>
                                            <hr />
                                            <div id="icon"><img id="wicon" src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"} alt="Weather icon" /></div>
                                            <h1 className="fw-bolder mb-5">{data.main.temp} &deg;C</h1>
                                            <p className="lead fw-bolder mb-0">{data.weather[0].main}</p>
                                            <p className="lead">{data.main.temp_min}&deg;C | {data.main.temp_max}&deg;C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    )
}

export default SearchWeather