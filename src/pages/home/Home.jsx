import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import Widgets from '../../Components/Widgets/Widgets'
import Feature from '../../Components/Feature/Feature'
import Chart from '../../Components/Chart/Chart'
import './home.scss'
import Tables from '../../Table/Tables'

const Home = () => {
  return (
   <div className='home'>
   <Sidebar/>
  <div className="homeContainer">
    <Navbar/>
    <div className="widget">
    <Widgets type='user'/>
     <Widgets type='order'/>
    <Widgets type='earning'/>
    <Widgets type='balance'/> 
    </div>
    <div className="chart">
    <Feature/>
    <Chart/>
    </div>
    <div className="listcontainer">
    <div className="listTitle">
      Latest transection
      <Tables/>


    </div>

    </div>
    </div>
  </div>
  )
}


export default Home