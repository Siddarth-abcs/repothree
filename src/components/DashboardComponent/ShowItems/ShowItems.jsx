import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShowItems = ({title, items, type}) => {
  const navigate = useNavigate();

  const handleDblClick = (itemId) => {
    if (type==="folder") {
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      alert("File clicked")
    }
  }
  return (
    <div className='w-100'>
        <h4 className='text-center border-bottom'>{title}</h4>
        <div className='row gap-2 py-4 flex-wrap'>
            {items.map((item,index) => {
                return( 
                <p key={index * 55} className='col-md-2 py-3 text-center border d-flex flex-column'
                onDoubleClick={()=> handleDblClick(item.docId)}
                >
                  {type === "folder" ? (
                    <i class="fa-solid fa-folder"></i>
                  ):(
                    <i class="fa-solid fa-file"></i>
                  )}
                  {item.data && item.data.name ? item.data.name : 'No Name'} 
                  </p>
                )
            })}
        </div>
    </div>
  )
}

export default ShowItems;
