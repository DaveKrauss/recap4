export default function List({ activities }) {
  console.log(activities);
  const listItems = activities.map((activity) => (
    <li key={activity.id}>
      {activity.name}
      {activity.isSunnyWeather ? "true" : "false"}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
