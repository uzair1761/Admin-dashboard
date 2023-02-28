import React from 'react'
import './datatables.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {userColumns ,userRows} from  '../tabledata'






const Datatables = () => {
  const action =[{field :'action' , headerName:'Action' ,width:200 ,rendercell:()=>{
    return (
      <div className="cellAction">
        <div className="viewButton">
        view
        </div>
        <div className="deletebutton">delete</div>
      </div>
    )
  }
  }]
  return (
    <div className='Datatables'>
         <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(action)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatables