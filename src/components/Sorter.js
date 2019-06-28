import React from "react";

import "./Sorter.css";

function Sorter({ setSorter, setOrder, inverted }) {
  const handleChange = ({ target: { value } }) => {
    setSorter(value);
  };

  return (
    <div className="Sorter">
      <div className="Sorter_Selector">
        <label>Sort by :</label>
        <select onChange={handleChange}>
          <option value="name">Name</option>
          <option value="username">Userame</option>
          <option value="elevationMin">Elevation min</option>
          <option value="elevationMax">Elevation max</option>
        </select>
      </div>

      <div className="Sorter_Inverted">
        <label>Inverted :</label>
        <input
          type="checkbox"
          checked={inverted}
          onChange={({ target: { checked } }) => {
            setOrder(checked);
          }}
        />
      </div>
    </div>
  );
}

export default Sorter;
