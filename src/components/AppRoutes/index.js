import React from "react"

import {Routes,Route} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import UserManagement from "../../Pages/UserManagement";
import LogoSettings from "../../Pages/LogoSettings";

export default function AppRoutes() {
  return (
 
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/usermanagement" element={<UserManagement/>}></Route>

        <Route path="/logosettings" element={<LogoSettings/>}></Route>

    </Routes>
 
  )
}
