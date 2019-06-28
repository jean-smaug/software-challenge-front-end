import React, { useState } from 'react'
import uuid from 'uuid/v1'

import Select from './Select'

import './Modal.css'

function Modal ({ users, setModalVisibility, setScans, scans }) {
  const [name, setName] = useState('')
  const [scannedByUserId, setScannedByUserId] = useState(0)
  const [elevationMin, setElevationMin] = useState(0)
  const [elevationMax, setElevationMax] = useState(0)

  const addScan = () => {
    setScans([...scans, { name, scannedByUserId, elevationMin, elevationMax, id: uuid() }])
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
      <Select
        options={users}
        optionKey='name'
        optionValue='id'
        keyPrefix='selectUser-'
        onChange={({ target: { value } }) => setScannedByUserId(Number(value))}
      />

      <button onClick={addScan}>Add</button>
    </div>
  )
}

export default Modal
