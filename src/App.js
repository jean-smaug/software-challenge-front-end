import React, { useState, useEffect } from 'react'
import './App.css'
import ScanList from './components/ScanList'
import Sorter from './components/Sorter'
import { createScanData, createUserData } from './data'
import { sortScansBy } from './utils'

function App () {
  const [scans, setScans] = useState(createScanData())
  const [users, setUsers] = useState(createUserData())
  const [sorter, setSorter] = useState('name')

  useEffect(() => {
    const sortedScans = sortScansBy(sorter, scans, users)
    
    setScans(sortedScans)
  }, [sorter])

  return (
    <div className='App'>
      <header className='App-header'>Software Challenge</header>
      <Sorter sorter={sorter} setSorter={setSorter} />
      <ScanList
        scans={scans}
        users={users}
      />
    </div>
  )
}

export default App
