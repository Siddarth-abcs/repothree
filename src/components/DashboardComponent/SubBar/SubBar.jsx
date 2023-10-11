import React from 'react'

export default function SubBar({ setIsCreateFolderModalOpen }) {
  return (
    <nav className='navbar navbar-expand-lg  mt2 navbar-light bg-white py-2 px-5'>
        <p>Root</p>

        <ul className='navbar-nav ms-auto'>
            <li className='nav-item mx-2'>
                <button className='btn btn-outline-dark'>
                <i className="fa-solid fa-file"></i>&nbsp;
                    Upload File
                </button>
            </li>
            <li className='nav-item mx-2'>
                <button className='btn btn-outline-dark'>
                <i className="fa-solid fa-file"></i>&nbsp;
                    Create File
                </button>
            </li>
            <li className='nav-item mx-2'>
                <button className='btn btn-outline-dark' onClick={()=> setIsCreateFolderModalOpen(true)}>
                <i className="fa-solid fa-folder-plus"></i>&nbsp;
                    Create Folder
                </button>
            </li>
        </ul>
    </nav>
  )
}
