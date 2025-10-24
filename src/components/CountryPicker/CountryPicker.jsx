import React,{useState,useEffect} from 'react'
import { NativeSelect,FormControl } from '@material-ui/core'
import { countries } from '../../api'
const CountryPicker = ({handleCountryChange}) => {
  const[fetchedCountries,setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async ()=>{
      setFetchedCountries(await countries());
    }
    fetchAPI()
  }, [setFetchedCountries])
  
  return (
    <FormControl>
      <NativeSelect defaultValue="global" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value='global'>Global</option>
        {fetchedCountries.map((country,index)=>(
          <option key={index} value={country}>
            {country}
          </option>
        ))
        }
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker