import React from 'react'
import FlipMove from 'react-flip-move'

import './ScanList.css'

function ScanList ({ scans, users, setUsers }) {
  return (
    <FlipMove className='ScanList'>
      {scans.map(scan => {
        const user = users.find(u => u.id === scan.scannedByUserId)
        return (
          <div className='ScanList_Item' key={scan.id}>
            {scan.name} by {user.name}
            {scan.elevationMin}
            {scan.elevationMax}
          </div>
        )
      })}
    </FlipMove>
  )
}

export default ScanList
