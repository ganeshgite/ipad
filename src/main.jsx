import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter , Routes , Route } from "react-router-dom"
import Dashboard from "./components/simple-dashboard/Dashboard"
import DashboardPage from './pages/DashboardPage.jsx'
import Data from './components/data/Data.jsx'
import Gg from "./pages/Gg"
import Navy from './components/simple-dashboard/indian-navy/Navy.jsx'
import Drdo from './components/simple-dashboard/drdo/Drdo.jsx'
import Hal from './components/simple-dashboard/hal/Hal.jsx'
import Airforce from './components/simple-dashboard/indian-airfoce-dashboard/Airforce.jsx'
import Objective from './pages/objctives/Objective.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route  path="/gg" element={<Gg />} />
           <Route path="/dashboard"   element={<Dashboard/>} />
           <Route path="/dashboard/airforce"   element={<Airforce/>} />
           <Route path="/dashboard/navy"   element={<Navy/>} />
           <Route path="/dashboard/drdo"   element={<Drdo/>} />
           <Route path="/dashboard/hal"   element={<Hal/>} />
           <Route path="/objective"   element={<Objective/>} />

      </Routes>
    </BrowserRouter>

    
  </React.StrictMode>,
)
