import React from 'react'
import{BrowserRouter,Routes,Route  } from "react-router-dom";
import Home from './Home';
import How2Handle from './How2Handle';
import Questions from './Questions';
import Contact from './Contact';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
// run this npm for brower router --npm install react-router-dom@6

const App = () => {
  return (
    <div>
      <Navigation/>

      <BrowserRouter>
<Routes>
<Route element={<Home/>} path ='/'/>
<Route element={<How2Handle/>} path ='how2handle'/>
<Route element={<Questions/>} path ='questions'/>
<Route element={<Contact/>} path ='contact'/>
</Routes>
      </BrowserRouter>
      <Footer/>
    </div>

  )
}

export default App
