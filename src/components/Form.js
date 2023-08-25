export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.target.elements;

    const newActivity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.goodweather.checked,
    };

    onAddActivity(newActivity);
  }

  elements.target.reset;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input name="name" id="name" />
      <br></br>
      <label htmlFor="goodweather">good weather activity:</label>
      <input name="goodweather" id="goodweather" type="checkbox" />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
