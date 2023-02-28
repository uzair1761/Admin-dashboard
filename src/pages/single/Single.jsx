import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import './single.scss'
import pexels from '../../assets/singlepage.jpg'
import Chart from '../../Components/Chart/Chart'

const Single = () => {
  return (
  
    <div className="single">
      <Sidebar/>
      <div className="singlecontainer">
     <Navbar/>
     <div className="top">
      <div className="left">
        <div className="button">Edit</div>
        <h1 className="title">
          Information
          
        </h1>
        <div className="item">
        <img src={pexels} alt="" className="image" />
        <div className="detail">
          <h1 className="itemTitle">Alexa</h1>
          <div className="detailItem">
            <span className="detailkey">Email</span>
            <span className="detailvalue">ozairkhanan@gmail.com</span>
            
          </div>
          <div className="detailItem">
            <span className="detailkey">phone</span>
            <span className="detailvalue">03169730742</span>
            
          </div>
          <div className="detailItem">
            <span className="detailkey">country</span>
            <span className="detailvalue">Pakistan</span>
            
          </div>
        </div>
        </div>
       
      
      </div>
      <div className="right">
        <Chart  aspect={3/2}/>
      </div>
     </div>
     <div className="bottom"></div>
   </div>
    </div>
     


  )
}

export default Single