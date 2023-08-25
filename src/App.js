import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Add new activity:</h1>
      <form onSubmit="">
        <label htmlFor="name">name of activity:</label>
        <input name="name" id="name" />
        <br></br>
        <label htmlFor="goodweather">good weather activity:</label>
        <input
          name="goodweather"
          id="goodweather"
          type="checkbox"
          value="good"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
