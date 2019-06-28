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
            {isEditModeActive ? (
              <input onChange={() => {}} value={scan.name} />
            ) : (
              <span className='ScanList_ItemTitle'>{scan.name}</span>
            )}{' '}
            by{' '}
            {isEditModeActive ? (
              <Select
                options={users}
                optionKey='name'
                optionValue='id'
                keyPrefix={scan.id}
                onChange={({ target: { value } }) => {
                  console.log(value)
                }}
              />
            ) : (
              <span>{user.name}</span>
            )}
            {/* {scan.elevationMin}
            {scan.elevationMax} */}
          </div>
        )
      })}
    </FlipMove>
  )
}

export default ScanList
