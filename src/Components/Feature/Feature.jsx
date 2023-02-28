import React from 'react'
import './feature.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Feature = () => {
  const percentage=78;
  return (
    <div className="feature">
    <div className="top">
      <h1 className="title">
        Total revenue
      </h1>
      <MoreVertIcon fontSize='small'/>
    </div>
     <div className="bottom">
       <div className='featuredchart'>

    < CircularProgressbar  value={60} text={'60%'}  strokeWidth={4}/>
    </div>
   <p className='title'>Total sales made today</p>
   <p className='amount'>$420</p>
   <p className='desc'>previous amount may not be included.</p> 
   <div className="summary">
    <div className="item"> 
    <div className="itemTitle" >Week</div>
    <div className="itemresult positive">
    <ArrowDropUpIcon/>
      <div className="resultamount ">$12.34</div>
    </div>
    </div>
    <div className="item"> 
    <div className="itemTitle" >Month</div>
    <div className="itemresult positive">
    <ArrowDropUpIcon/>
      <div className="resultamount ">$12.34</div>
    </div>
    </div>
    <div className="item"> 
    <div className="itemTitle " >Target</div>
    <div className="itemresult negative">
    <ArrowDropDownIcon/>
      <div className="resultamount ">$12.34</div>
    </div>
    </div>
   </div>
    </div> 
    </div>
  )
}

export default Feature