import React from "react";
import data from './data';

export default function Menu({value, filterFunction}) {
  return (
    <div className="main-menu">
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button onClick={() => console.log(filterFunction("breakfast"))}>
            Breakfast</button>
        </li>
        <li>
          <button onClick={() => console.log(filterFunction("lunch"))}>
            Lunch</button>
        </li>
        <li>
          <button onClick={() => console.log(filterFunction("shakes"))}>
            Shakes</button>
        </li>
      </ul>
    </div>
  );
}
