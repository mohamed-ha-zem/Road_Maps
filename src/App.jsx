import { Route, Routes } from 'react-router-dom'
import './App.css'
import LaunchPad from './Pages/launchPad'
import DashBoard from './DashBoard/dashBoard'
import FrontEnd from './RoadMaps/front-end'
import BackEnd from './RoadMaps/back-end'
import QuestionsFrontEnd from './Projects/front-end'

function App() {
  return(
      <>
        <Routes>
          <Route path='/' element={<LaunchPad/>}/>
          <Route path='/dashBoard' element={<DashBoard/>}>
          <Route path='/dashBoard' element={<FrontEnd/>}/>
            <Route index path='front-end' element={<FrontEnd/>}/>
            <Route path='front-end-questions' element={<QuestionsFrontEnd/>}/>
          </Route>
        </Routes>
      </>
  )
}

export default App
