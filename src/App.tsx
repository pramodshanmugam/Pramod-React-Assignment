import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Sidenav from './components/Sidenav';
import Issue from './components/Issue';
import { BrowserRouter, BrowserRouter as Router, Route,Routes } from "react-router-dom"
import {RoutePath,routes,} from "./routs"
import Layout from './Layout/Layout';


export default function App () {

  return(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      {routes.map((route)=> (
      
      
      <Route 
      
      index={RoutePath.HOME===route.path}
      path={route.path}
      element={<route.component/>}
      key={route.name}  
        
      />

      ))};
      </Route>
      </Routes> 
         
     
    </BrowserRouter>



  )

}
