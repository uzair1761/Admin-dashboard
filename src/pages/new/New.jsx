import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import newimage from '../../assets/new.jpg'
import Sidebar from '../../Components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import './new.scss'




const New = ({input ,Title}) => {
  const [file,setFile] =useState('');
  return (
    <div className='new'>
     <Sidebar/>
     <div className="newContainer">
      <Navbar/>
      <div className="top">
      <h1>{Title}</h1>
      </div>
      <div className="bottom">
      <div className="left">
      <img src={file ? URL.createObjectURL(file) :{newimage }} alt="this is image" className="image" />
      
        </div>
        <div className="right">
          <form>
          <div className="formInput" key={input.key}>
              <label htmlFor="">
              image: < DriveFolderUploadIcon className='icon' />
              </label>
              <input type="File" id='file' styles={{display:'none'}} onChange={e=>setFile(e.target.files[0])}/>
            </div>
            {input.map((inputs)=>(
              
            <div className="formInput">
            <label htmlFor="">{inputs.label}</label>
            <input type={inputs.type}  placeholder={inputs.placeholder}/>
          </div>
            ))}

            
            <button className="btn">send</button>




          </form>
        </div>
      </div>
     </div>

    </div>
  )
}

export default New