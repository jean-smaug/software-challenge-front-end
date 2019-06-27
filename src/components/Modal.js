import React, { useState } from 'react'

import './Modal.css'

function Modal ({ users, setModalVisibility, setScans, scans }) {
  const [name, setName] = useState('')
  const [scannedByUserId, setScannedByUserId] = useState(0)
  const [elevationMin, setElevationMin] = useState(0)
  const [elevationMax, setElevationMax] = useState(0)

  const addScan = () => {
    setScans([...scans, { name, scannedByUserId, elevationMin, elevationMax }])
    console.log([...scans, { name, scannedByUserId, elevationMin, elevationMax }])
    setModalVisibility(false)
  }

  return (
    <div className='Modal'>
      <button className='Modal_CloseButton' onClick={() => setModalVisibility(false)}>
        X
      </button>

      <label>Name</label>
      <input
        type='text'
        name='name'
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <label>Elevation min</label>
      <input
        type='number'
        name='elevationMax'
        value={elevationMin}
        onChange={({ target: { value } }) => setElevationMin(value)}
      />
      <label>Elevation max</label>
      <input
        type='number'
        name='elevationMin'
        value={elevationMax}
        onChange={({ target: { value } }) => setElevationMax(value)}
      />

      <label>Associated user</label>
      <select onChange={({ target: { value } }) => setScannedByUserId(Number(value))}>
        {users.map(user => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>

      <button onClick={addScan}>Add</button>
    </div>
  )
}

export default Modal
