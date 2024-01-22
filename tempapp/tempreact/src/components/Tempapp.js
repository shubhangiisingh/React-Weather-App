import React, {useEffect, useState}   from "react";
import "./css/style.css";

const Tempapp = () => { 
    const[city, setCity]= useState(null);
    const[search, setSearch]= useState("Mumbai");
    useEffect( () => {
        const fetchApi = async () =>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5800050cc3b877fbfd13b63728c94c24`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fetchApi();
    },[search])
    return(
        <>
         <div className="box">
            <div className="input">
                <input type="Search"
                value={search}
                className="inputFeild"
                onChange={(event) =>{ setSearch(event.target.value)}}/>
            </div>
        {!city ? (
            <p className="errorMsg">No Data Found</p>
        ): (<div>
         <div className="info">
<h2 className="location">
<i className="fas fa-street-view"></i>{search}
</h2>
<h1 className="temp">
{city.temp}°cel
</h1>
<h3 className="tempmin_max"> Min : {city.temp_min}°cel | Max : {city.temp_max}°cel</h3>
         </div> 
         {/* <div className="wave -one"></div>
         <div className="wave -two"></div>
         <div className="wave -three"></div> */}
         </div>
        )}
        </div>
         </>
    )

}
export default Tempapp;