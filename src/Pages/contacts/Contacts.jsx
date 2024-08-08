import { Box } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { rows,columns } from './data'

function Contacts() {
  return (
    <Box sx={{ height: 600, width: "100%" ,mx:"auto"}}>
    <DataGrid
     slots={{
      toolbar: GridToolbar,
    }}
      rows={rows}
      // @ts-ignore
      columns={columns}
    />
  </Box>
  )
}

export default Contacts
