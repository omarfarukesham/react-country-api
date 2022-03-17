// import { useEffect, useState } from "react";
import Countries from "./component/Countries/Countries";
import Header from "./component/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <h1>Countries Information and Flags</h1>
      <Countries></Countries>
    </div>
  )
}

// function Countries(){

//   const[cities, setCountry] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data =>setCountry(data.slice(0,50)))
//   },[])

//   return(
//     <div className="miniComponent">
//       {cities.map(city => DetailsCountries(city))}
//     </div>
//   )
// }

// function DetailsCountries(props){
//   return(
//       <div className="info">
//         <h3>CountryName:{props.name.common}</h3>   
//         <img src={props.flags.png} alt="images Flags" />   
//       </div>
//   )
// }

export default App;
