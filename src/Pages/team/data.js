import { width } from "@mui/system";

export const rows = [
    { id: 1, name: 'Jon snow', email: 'jonsnow@gmail.com', age: 35,phone: "(665)121-5454", access: "Admin" },
    { id: 2, name: "Cersei Lannister", email: "cerseilannister@gmail.com", age: 42, phone: "(421) 314-2288", access: "Admin"},
    {id: 3, name: "Jaime Lannister", email: "jaimelannister@gmail.com", age: 45, phone: "(422)982-6739", access: "Admin"},
    { id: 4, name: "Anya Stark", email: "anyastark@gmail.com", age: 16, phone: "(921)425-6742", access: "Manager"},
    { id: 5, name: "Daenerys john", email: "daenerysjohn@gmail.com", age: 31, phone: "(921)425-3322", access: "Manager"},
    { id: 6, name: "Ever Melisandre", email: "evermelisandre@gmail.com", age: 150, phone: "(232) 545-6483", access: "User", }, 
    { id: 7, name: "Ferrara Clifford", email: "ferraraclifford@gmail.com", age: 44, phone: "(543)124-0123", access: "User", },
    {id: 8, name: "Rossini Frances", email: "rossinifrances@gmail.com", age: 36, phone: "(222) 444-5555", access: "User"},
    {id: 9, name: "Harvey Roxie", email: "harveyroxie@gmail.com", age: 65, phone: "(444)555-6239", access: "User"}
    

];

export const columns = [
    { field: 'id', headerName: 'ID', width:33,align:"center",headerAlign:"center" },
    { field: 'name', headerName: 'Name',flex: 1 ,align:"center",headerAlign:"center"},
    { field: 'email', headerName: 'Email',flex: 1, align:"center",headerAlign:"center"},
    { field: 'age', headerName: 'Age', },
    { field: 'phone', headerName: 'Phone',flex: 1 ,align:"center",headerAlign:"center"},
    { field: 'access', headerName: 'Access', flex: 1,align:"center",headerAlign:"center"},
];


