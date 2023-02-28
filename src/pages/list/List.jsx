import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import './list.scss'
import Datatables from '../../Datatables/Datatables'


const List = () => {
  return (
    <div className='list'>
     <Sidebar/>
     <div className="listContainer">
      <Navbar/>
      <Datatables/>
    </div>
  
   

  </div>

  )
}

export default List