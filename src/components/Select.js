import React from "react";

function Select({ options, onChange, optionKey, optionValue, keyPrefix = "", defaultValue }) {
  return (
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map(option => {
        return (
          <option key={`${keyPrefix}${option.id}`} value={option[optionValue]}>
            {option[optionKey]}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
