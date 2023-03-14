import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Insight from './Insight';
import Personas from './Personas';
import Reflection from './Reflection';

import React, { Component }  from 'react';

function App() {
  return (
    <div className="content" >
      
      <div className="barContainer">
        <div className='bot-row'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Main</NavLink>
          <NavLink to="/personas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Personas</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Insights</NavLink>
          <NavLink to="/reflection" className={({ isActive }) => isActive ? 'reflection-link nav-link active' : 'reflection-link nav-link' }> Reflection </NavLink>
        </div>
      </div>
      <Routes>
        <Route path='/insights' element={<Insight text="Insight Router"/>}></Route>
        <Route exact path='/insights/1' element={<Insight text=" Despite the impression that librarians only manage books and answer questions, their job actually consists of three equally important parts: supporting people access information, supporting people create knowledge, and preserving knowledge. " />}></Route>
        <Route exact path='/insights/2' element={<Insight text="This shift to digital has actually made it harder for especially smaller libraries to access information, as you can no longer buy a VHS tape and own that video forever. As the importance of digital information rivals the importance of physical information, it is harder to preserve data, as streaming services only care about selling subscriptions." />}></Route>
        <Route exact path='/personas' element={<Personas/>}></Route>
        <Route path='/personas/:id' element={<Personas/>}></Route>
        <Route path='/reflection' element={<Reflection/>}></Route>
        <Route exact path='/'     element={<Home />}></Route>
      </Routes>

    </div>
  );

  
}

export default App;
