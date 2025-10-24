import axios from "axios";
/*const url = "https://covid19.mathdro.id/api";*/
import { countriesNames } from "./indexCountries";
const url ={
    data:{
        confirmed:{
            value:7566,
        },
        recovered:{
            value:5673,
        },
        deaths:{
            value:56653
        },
        lastUpdate:"2025-10-24", // ISO format
    }
}

export const fetchData = async (country) =>{
    let changeableUrl = url;
    if(country){
        changeableUrl = ""
    }
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = changeableUrl
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    } catch (error) {
        console.log(error)
    }
}
export const fetchDailyData = async ()=>{
try {
    const {data} = url
    const modifiedData = data.map((dailyData)=>({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate,
    }))
    return modifiedData;
} catch (error) {
    
}
}
export const countries = async () =>{
    try {
        const {data:{countries}} = countriesNames;
        return countries.map((country)=>country.name)
    } catch (error) {
        
    }
}