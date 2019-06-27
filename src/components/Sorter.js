import React from 'react'

function Sorter ({ sorter, setSorter }) {
  function handleChange ({ target: { value } }) {
    setSorter(value)
  }

  return (
    <div className='Sorter'>
      <select onChange={handleChange}>
        <option value='name'>Name</option>
        <option value='username'>Userame</option>
        <option value='elevationMin'>Elevation min</option>
        <option value='elevationMax'>Elevation max</option>
      </select>
    </div>
  )
}

export default Sorter
