import { getImageUrl } from "../utils";
function CityWeather(props) {
  const listItems = props.city.map((c) => (
    <li>
      <img src={getImageUrl(c)} alt={c.name} />
      <p>
        <b>
          {c.name},{" " + c.country}
          {" " + c.temperature}
        </b>
        <br />
      </p>
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}

export default CityWeather;
