import "./App.css";
import Form from "./components/Form.js";
import { useEffect, useState } from "react";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setWeather(data.temperature);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    const activityWithID = { ...newActivity, id: uid() };
    setActivities([...activities, activityWithID]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isSunnyWeather === weather
  );

  return (
    <>
      <h1>{weather.temperature}</h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <h2>Add new activity:</h2>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
