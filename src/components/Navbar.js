import React from 'react'

import './Navbar.css'

function Navbar ({ isEditModeActive, setEditMode, isModalVisible, setModalVisibility }) {
  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible)
  }

  const toggleEditMode = () => {
    setEditMode(!isEditModeActive)
  }

  return (
    <nav className='Navbar'>
      <div className='Navbar_NavbarRight'>
        <div className='Navbar_Item' onClick={toggleModalVisibility}>
          Add scan
        </div>
        <div className='Navbar_Item' onClick={toggleEditMode}>
          {isEditModeActive ? 'Save' : 'Active edit mode'}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
