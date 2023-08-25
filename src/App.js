import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const newActivity = {
      name,
    };
    setName(name);
  }
  function handleWeatherChange(event) {
    event.target.checked;
  }

  return (
    <>
      <h1>Add new activity:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name of activity:</label>
        <input name="name" id="name" value={""} />
        <br></br>
        <label htmlFor="goodweather">good weather activity:</label>
        <input
          name="goodweather"
          id="goodweather"
          type="checkbox"
          value="good"
          onChange={handleWeatherChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
