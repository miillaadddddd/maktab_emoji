import logo from "./logo.svg";
import "./App.css";
import { data } from "./asset/data.js";
import { useEffect, useState } from "react";

function App() {
  const [valueInput, setValueInput] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    if (valueInput !== "") {
      let helperDataFilter = data.filter((item) =>
        item.keywords.toLowerCase().includes(valueInput.toLowerCase())
      );

      setDataFilter(helperDataFilter);
    } else {
      setDataFilter([]);
    }
  }, [valueInput]);

  return (
    <div className="App">
      <header className="App-header">
        <span style={{ fontSize: "40px", marginBottom: "15px" }}>
          {" "}
          🙈 🙉 🙊{" "}
        </span>
        <input
          className="input-search"
          type="text"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          placeholder="ایموجی مورد نظر را سرچ کنید."
        />
        <div className="wrap-emojis">
          {dataFilter.map((item, index) => (
            <div className="emoji" key={index}>
              <span style={{ fontSize: "60px" }}>{item.symbol}</span>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
