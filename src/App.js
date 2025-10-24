import {Cards,Chart,CountryPicker} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import React from "react";

class App extends React.Component{
  state = {
    data:{},
    country:"",
  }
  async componentDidMount(){
    const data = await fetchData();
    this.setState({data:data})
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country})
  }
  render(){
    const {data,country} = this.state;
  return (
    <div className={styles.container}>
      <Cards data={data}/>
     {/* <Chart data={data} country={country}/>*/}
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
    </div>
  );
}
}

export default App;
