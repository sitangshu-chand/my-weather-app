import logo from "./logo.svg";
import "./App.css";
import CityWeather from "./CityWeather/CityWeather";
import { useState } from "react";
import { cities } from "./data";


function App() {
  const [city, setCity] = useState(cities);
  const [count, setCount] = useState(2);
  const handleAddCity = () => {
    const newCity = {
      id: count,
      name: "Mumbai",
      country: "India",
      temperature: "19⁰c",
      imageId: "snow",
    };
    setCity((prevItems) => [...prevItems, newCity]);
    setCount(count + 1);
  };
  // const listItems = city.map((c) => (
  //   <li>
  //     <img src={getImageUrl(c)} alt={c.name} />
  //     <p>
  //       <b>
  //         {c.name},{" " + c.country}
  //         {" " + c.temperature}
  //       </b>
  //       <br />
  //     </p>
  //   </li>
  // ));
  return (
<>
    <header>
      Sitangshu's Weather App
    </header>
    <div className="App">
      
      <CityWeather city={city}></CityWeather>
      <button class="add-btn" onClick={handleAddCity}>
        ➕ Add
      </button>
    </div>
    </>
  );
}

export default App;
