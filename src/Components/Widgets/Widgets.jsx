import React from 'react'
import './widgets.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';





const Widgets = ({type}) => {
    let data;
    const amount=200;
    const per=10;

    switch(type){

        case "user":
        data={
            title:'users',
            Ismoney:false,
            link:'see all user',
            icon:<PersonIcon className='icon'/>
           
        }
        break;
        case 'order':
            data={
                title:'order',
                Ismoney:true,
                link:'view all user',
                icon:<BookmarkBorderIcon className='icon'/>
               
            }
            break;
            case 'earning':
                data={
                    title:'earning',
                    Ismoney:true,
                    link:'see all earning',
                    icon:<AccountBalanceWalletOutlinedIcon  className='icon' style={{}}/>
                   
                }
                break;
                case 'balance':
                    data={
                        title:'balance',
                        Ismoney:true,
                        link:'see your balance',
                        icon:<AccountBalanceIcon className='icon'/>
                    }
                    break;
        
        default:
            break;
    }
console.log(data);
  return (
   <div className="Wigets">
    <div className="left">
       <span className="title">{data.title}</span>
       <span className="counter">{data.Ismoney && '$'} {amount}</span>
       <span className="link">{data.link}</span>
    </div>
    <div className="right">
        <div className="percentage negative">
        <ArrowDropUpIcon/>
     20%
        </div>
        {data.icon}

    </div>
  
   </div>

  )
}

export default Widgets