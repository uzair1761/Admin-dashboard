
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { darkMOde_context } from '../../Context/Context';




const Sidebar = () => {
    const {dispatch} =useContext(darkMOde_context)
  return (
    <div className='sidebar'> 
     <Link to='/' style={{textDecoration:'none'}}> 
    <div className="top"><span className="logo">UZAIR ADMIN</span></div>
    </Link>
    <hr></hr>
    <div className="center">
        <ul> 
            <p className="title">MAIN</p>
            <li>
           < DashboardIcon className='icons'/>
           <span>DashBoard</span>   
            </li>
            
            <p className="title">LIST</p>
            <li>
            <Link to='/Users' style={{textDecoration:'none'}}> 
           < Person2OutlinedIcon className='icons'/>
              <span> Users</span> 
              </Link>
            </li>

            <li>
            <Link to='/products' style={{textDecoration:'none'}}> 
            <ProductionQuantityLimitsOutlinedIcon className='icons'/>
            <span>Product</span> 
            </Link>
            </li>
            <li>
            <BorderColorIcon className='icons'/>
            <span> Order</span> 
            </li>
            <li>
           < DeliveryDiningOutlinedIcon className='icons'/>
              <span> Delivery</span> 
            </li>
            <p className="title">USEFUL</p>
            <li>
            <QueryStatsOutlinedIcon className='icons' />
            <span> stats</span> 
            </li>
            <li>
            <CircleNotificationsOutlinedIcon className='icons' />
            <span> Notification</span> 
            </li>
            <p className="title">SERVICE</p>
            <li>
                <DirectionsRunOutlinedIcon className='icons'/>
            <span> System Health</span> 
            </li>
            <li>
                <LoginOutlinedIcon className='icons'/>
            <span> Logs</span> 
            </li>
            <li>
           < SettingsApplicationsOutlinedIcon className='icons'/>
            <span>Setting</span>  
            </li>
            <p className="title">USER</p>
            <li>
                <Person2Icon className='icons'/>
            <span> Profile</span>  
            </li>
            <li>
                <LogoutIcon className='icons'/>
            <span> Logout</span>  
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type:'LIGHT'})}></div>
        <div className="colorOption" onClick={()=>dispatch({type:'DARK'})}></div>
    </div>
    
    
    </div>
  )
}

export default Sidebar