import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Dashboard from './Pages/dashboard/Dashboard';
import Team from './Pages/team/Team';
import Contacts from './Pages/contacts/Contacts';
import Invoices from './Pages/invoices/Invoices';
import Form from './Pages/form/Form';
import Calender from './Pages/calender/Calender';
import FAQ from './Pages/faq/FAQ';
import PieChart from './Pages/pieChart/PieChart';
import Barchart from './Pages/barchart/Barchart';
import LineChart from './Pages/lineChart/LineChart';
import Geography from './Pages/geography/Geography';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team/>} />
      <Route path='contacts' element={<Contacts/>} />
      <Route path='invoices' element={<Invoices/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/calender' element={<Calender/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/bar' element={<Barchart/>} />
      <Route path='/pie' element={<PieChart/>} />
      <Route path='/line' element={<LineChart/>} />
      <Route path='/geography' element={<Geography/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
