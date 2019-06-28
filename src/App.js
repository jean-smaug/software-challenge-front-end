import React, { useState, useEffect } from 'react'
import './App.css'
import ScanList from './components/ScanList'
import Sorter from './components/Sorter'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { createScanData, createUserData } from './data'
import { sortScansBy } from './utils'

function App () {
  const [scans, setScans] = useState(createScanData())
  const [users, setUsers] = useState(createUserData())
  const [sorter, setSorter] = useState('name')
  const [isEditModeActive, setEditMode] = useState(false)
  const [isModalVisible, setModalVisibility] = useState(false)

  useEffect(() => {
    const sortedScans = sortScansBy(sorter, scans, users)

    setScans(sortedScans)
  }, [sorter])

  return (
    <div className='App'>
      {isModalVisible && <Modal {...{ users, setModalVisibility, setScans, scans }} />}
      <Navbar {...{ isEditModeActive, setEditMode, isModalVisible, setModalVisibility }} />
      <header className='App-header'>Software Challenge</header>
      <Sorter sorter={sorter} setSorter={setSorter} />
      <ScanList scans={scans} users={users} setUsers={setUsers} isEditModeActive={isEditModeActive} />
    </div>
  )
}

export default App
