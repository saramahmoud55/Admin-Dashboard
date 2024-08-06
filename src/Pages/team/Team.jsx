import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './data';




function Team() {
  return (
    <div style={{ height: 600, width: '100%' }}>
    <DataGrid rows={rows} 
// @ts-ignore
    columns={columns} />
  </div>
  )
}

export default Team
