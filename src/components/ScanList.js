import React from 'react'
import FlipMove from 'react-flip-move'
import Select from './Select'

import './ScanList.css'

function ScanList ({ scans, users, isEditModeActive, setUsers }) {
  return (
    <FlipMove className='ScanList'>
      {scans.map(scan => {
        const user = users.find(u => u.id === scan.scannedByUserId)
        return (
          <div className='ScanList_Item' key={scan.id}>
            {isEditModeActive ? <input value={scan.name} /> : <div>{scan.name}</div>} by
            {isEditModeActive ? (
              <Select options={users} optionKey='name' />
            ) : (
              <div>{user.name}</div>
            )}
            {scan.elevationMin}
            {scan.elevationMax}
          </div>
        )
      })}
    </FlipMove>
  )
}

export default ScanList
