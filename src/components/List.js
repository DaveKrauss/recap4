export default function List({ activities, isGoodWeather }) {
  const listItems = activities.map((activity) => (
    <li key={activity.id}>
      {activity.name} -
      {activity.isSunnyWeather ? "Good Weather" : "Bad Weather"}
    </li>
  ));

  return (
    <>
      <h1>{isGoodWeather ? "Good Weather: " : "Bad weather: "}</h1>
      <ul>{listItems}</ul>
    </>
  );
}
