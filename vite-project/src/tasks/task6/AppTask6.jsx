import React from 'react'
import Nav from './components/Nav'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import { BrowserRouter, Route, Routes } from "react-router";
import './style.css';

export default function AppTask6() {
  return (
    <BrowserRouter>
      <div>
          <Nav/>
          <Routes>
            <Route path='/about' element = {<About/>} />
            <Route path='/projects' element = {<Projects/>} />
            <Route path='/contacts' element = {<Contacts/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}
