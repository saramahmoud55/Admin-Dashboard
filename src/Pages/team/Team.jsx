import { DataGrid } from '@mui/x-data-grid';
// @ts-ignore
import { columns, rows } from './data';
import { Box, Typography, useTheme } from '@mui/material';
import { AdminPanelSettingsOutlined,LockOpenOutlined,SecurityOutlined } from '@mui/icons-material';



function Team() {
  const theme =useTheme()
   const columns = [
    { field: 'id', headerName: 'ID', width:33,align:"center",headerAlign:"center" },
    { field: 'name', headerName: 'Name',flex: 1 ,align:"center",headerAlign:"center"},
    { field: 'email', headerName: 'Email',flex: 1, align:"center",headerAlign:"center"},
    { field: 'age', headerName: 'Age', },
    { field: 'phone', headerName: 'Phone',flex: 1 ,align:"center",headerAlign:"center"},
    { field: 'access', headerName: 'Access', flex: 1,align:"center",headerAlign:"center",
        renderCell:({row:{access}})=>{
            return(
                <Box sx={{justifyContent:"space-evenly",disply:"flex",padding:"5px",width:"99px",borderRadius:"3px",textAlign:"center",
                backgroundColor:access==="admin"?theme.palette.primary.dark:access==="manger"?theme.palette.secondary.dark:"#3da58a"}}>
                   {access==="Admin"&& (<AdminPanelSettingsOutlined fontSize='small'/>)}
                   {access==="Manger"&& (<LockOpenOutlined fontSize='small'/>)}
                   {access==="User"&& (<SecurityOutlined fontSize='small'/>)}
                    <Typography sx={{fontSize:"13px"}}>{access}</Typography>

                    dddddddddd
                </Box>
            )
        }
    },
];



  return (
    <div style={{ height: 600, width: '100%' }}>
    <DataGrid rows={rows} 
// @ts-ignore
    columns={columns} />
  </div>
  )
}

export default Team
