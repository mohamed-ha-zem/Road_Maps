import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard/dashBoard'
import FrontEnd from './RoadMaps/front-end'
// import BackEnd from './RoadMaps/back-end'
import QuestionsFrontEnd from './Questions/front-end'
import RoadmapCircle from './Charts/charts'
import React from 'react';
import LaunchPad from './Pages/launchPad'
import "./App.css"
import Calendar from './DashBoard/Calender'
import BackEnd from './RoadMaps/back-end'
import MopileApplication from './RoadMaps/mopileApplication'

function App() {
  return(
      <>
        <Routes>
          <Route path='/' element={<LaunchPad/>}/>
          <Route path='/dashBoard' element={<DashBoard/>}>
            <Route path='/dashBoard' element={<FrontEnd/>}/>
            <Route path='front-end' element={<FrontEnd/>}/>
            <Route path='back-end' element={<BackEnd/>}/>
            <Route path='mobileApplication' element={<MopileApplication/>}/>
            <Route path='front-end-questions' element={<QuestionsFrontEnd/>}/>
            <Route path='front-end-cities' element={<RoadmapCircle/>}/>
            <Route path='calender' element={<Calendar/>}/>
          </Route>
        </Routes>
      </>
  )
}

export default App
