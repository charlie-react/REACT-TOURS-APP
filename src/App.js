// import logo from './logo.svg';
import "./App.css";
import Template from "./Template";
import { useState, useEffect } from "react";
import { data } from "./data";

function App() {
  const [countries, setCountries] = useState(data);
  const [tourContent,setTourContent] = useState("Our Tour")
  const rerender = () => {
    setCountries(data);
  };
  // const [empty, setEmpty] = useState(false);
  // console.log(countries);

  useEffect(() => {
    if (countries.length === 0) {
      setTourContent("No Tours Left")
    }
  }, [countries]);
  return (
    <div className="outer-con">
      <h1 className="title_underline text-center">{tourContent}</h1>
      <div className="App layout">
        <Template countries={countries} setCountries={setCountries} />
      </div>
      {countries.length === 0 && (
        <button className="btn btn-success refresh" onClick={rerender}>
          Refresh
        </button>
      )}
    </div>
  );
}

export default App;
