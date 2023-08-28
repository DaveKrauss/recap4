export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;

    const newActivity = {
      name: formElements.activityName.value,
      isSunnyWeather: formElements.isSunnyWeather.checked,
    };

    onAddActivity(newActivity);
    console.log(newActivity);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="activityName">name:</label>
      <input name="activityName" id="activityName" />
      <br></br>
      <label htmlFor="isSunnyWeather">good weather activity:</label>
      <input name="isSunnyWeather" id="isSunnyWeather" type="checkbox" />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
