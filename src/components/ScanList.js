import React from 'react'
import FlipMove from 'react-flip-move'
import Select from './Select'

import './ScanList.css'

function ScanList ({ scans, users, isEditModeActive, setScans }) {
  return (
    <FlipMove className='ScanList'>
      {scans.map(scan => {
        const user = users.find(u => u.id === scan.scannedByUserId)
        return (
          <div className='ScanList_Item' key={scan.id}>
            {isEditModeActive ? (
              <input
                onChange={({ target: { value } }) => {
                  scan.name = value
                  setScans([...scans])
                }}
                value={scan.name}
              />
            ) : (
              <span className='ScanList_ItemTitle'>{scan.name}</span>
            )}
            <span className='ScanList_ItemAuthor'>
              {' '}
              by{' '}
              {isEditModeActive ? (
                <Select
                  options={users}
                  optionKey='name'
                  optionValue='id'
                  keyPrefix={scan.id}
                  onChange={({ target: { value } }) => {
                    scan.scannedByUserId = Number(value)
                    setScans([...scans])
                  }}
                />
              ) : (
                <span>{user.name}</span>
              )}
            </span>
            {/* {scan.elevationMin}
            {scan.elevationMax} */}
          </div>
        )
      })}
    </FlipMove>
  )
}

export default ScanList
