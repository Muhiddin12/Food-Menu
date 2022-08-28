
import "./index.css";
import data from "./data";
import Menu from "./Menu";
import React from 'react';
import { useState } from "react";


function App() {
  const [value, setValue] = useState([]);
  
  function filterFunction(param) {
    let dataFilter = data.filter((item) => item.category === param);
    setValue(dataFilter);
    return dataFilter;
  }

  return (
    <div className="App">
      <Menu value={value} filterFunction={filterFunction} />
      {value.map((item) => (
        <div className="app-in">
          <img src={item.img} alt="img" />
          <h2>{item.title}</h2>
          <h3>{item.desc}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  ); 
}

export default App;