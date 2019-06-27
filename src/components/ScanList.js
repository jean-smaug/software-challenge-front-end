import React from 'react'
import FlipMove from 'react-flip-move'

import './ScanList.css'

function ScanList ({ scans, users }) {
  return (
    <div>
      <div className='Header'>Scans:</div>
      <div className='ScanList'>
        <FlipMove>
          {scans.map((scan) => {
            const user = users.find(u => u.id === scan.scannedByUserId)
            return (
              <div className='ScanListItem' key={scan.id}>
                {scan.name}
                <div className='UserName'>by {user.name}</div>
              </div>
            )
          })}
        </FlipMove>
      </div>
    </div>
  )
}

export default ScanList
