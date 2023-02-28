import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import picture from  '../../assets/pixels.jpg'
import { darkMOde_context } from '../../Context/Context';
import { useContext } from 'react';




const Navbar = () => {
    const {dispatch} =useContext(darkMOde_context)
  return (
    <div className="Navbar">
        <div className="wrapper">
            <div className="search">
                <input type='text'  placeholder='search'>
                </input>
                 <SearchIcon className='searchIcon'/>
                 </div>
                <div className="items">
                    <div className="item">

                    </div>
                    <div className="item">
                 
                    <LanguageIcon className='icon'/>
                    English
                    </div>
                    <div className="item">
                        <DarkModeIcon  className='icon' onClick={()=>dispatch({type:'TOGGLE'})}/>
                      
                    </div>
                    <div className="item">
                        <FullscreenIcon  className='icon'/>
                        
                    </div>
                    <div className="item">
                    <div className="counter">1</div>
                        <NotificationsNoneIcon className='icon'/>
                        
                    </div>
                    <div className="item">
                    <div className="counter">2</div>
                        <ChatBubbleOutlineIcon className='icon' />
                        
                    </div>
                    <div className="item">
                        <FormatListNumberedIcon  className='icon'/>
                    </div>
                    <div className='item'>
                       <img src={picture} alt='pics' className='avatar' />
                    </div>



                </div>



                
               





            </div>

        </div>
  )
}

export default Navbar