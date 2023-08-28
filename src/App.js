import "./App.css";
import Form from "./components/Form.js";
//import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    const activityWithID = { ...newActivity, id: uid() };
    setActivities([...activities, activityWithID]);
  }

  return (
    <>
      <h1>Add new activity:</h1>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}

export default App;
