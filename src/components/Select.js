import React from 'react'

function Select ({ options, onChange, optionKey, optionValue, keyPrefix = '' }) {
  return (
    <select onChange={onChange}>
      {options.map(option => (
        <option key={`${keyPrefix}${option.id}`} value={option[optionValue]}>
          {option[optionKey]}
        </option>
      ))}
    </select>
  )
}

export default Select
