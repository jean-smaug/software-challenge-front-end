import React from 'react'

function Select ({ options, onChange, optionKey }) {
  return (
    <select onChange={onChange}>
      {options.map(option => (
        <option value={option.id}>{option[optionKey]}</option>
      ))}
    </select>
  )
}

export default Select
