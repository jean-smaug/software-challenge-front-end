import React, { useState } from 'react'
import uuid from 'uuid/v1'
import './App.css'
import ScanList from './components/ScanList'
import Sorter from './components/Sorter'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { createScanData, createUserData } from './data'
import { sortScansBy } from './utils'

const usersData = createUserData()
const scansData = sortScansBy(
  'username',
  createScanData().map(scan => ({ ...scan, id: uuid() })),
  usersData
)

function App () {
  const [scans, setScans] = useState(scansData)
  const [users, setUsers] = useState(usersData)
  const [sorter, setSorter] = useState('name')
  const [isEditModeActive, setEditMode] = useState(false)
  const [isModalVisible, setModalVisibility] = useState(false)

  const sortedScans = sortScansBy(sorter, scans, users)

  return (
    <div className='App'>
      {isModalVisible && <Modal {...{ users, setModalVisibility, setScans, scans }} />}
      <Navbar {...{ isEditModeActive, setEditMode, isModalVisible, setModalVisibility }} />
      <Sorter sorter={sorter} setSorter={setSorter} />
      <ScanList
        scans={sortedScans}
        users={users}
        setUsers={setUsers}
        isEditModeActive={isEditModeActive}
      />
    </div>
  )
}

export default App
