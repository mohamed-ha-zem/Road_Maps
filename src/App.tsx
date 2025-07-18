import { Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard/dashBoard';
import FrontEnd from './RoadMaps/Front-End';
import QuestionsFrontEnd from './Questions/front-end';
import React from 'react';
import LaunchPad from './Pages/launchPad';
import "./App.css";
import Calendar from './DashBoard/Calender';
import BackEnd from './RoadMaps/Back-End';
import MopileApplication from './RoadMaps/MopileApplication';
import DevOps from './RoadMaps/DevOps';
import GameDevelpMent from './RoadMaps/Game-Development';
import DataScience from './RoadMaps/data-science';
import MachineLearning from './RoadMaps/Machine-Learning';
import AI from './RoadMaps/AI';
import CyberSecurity from './RoadMaps/cyber-security';
import BlockChain from './RoadMaps/blockchain';
import UIUX from './RoadMaps/UI-UX';
import Testing from './RoadMaps/Testing';
import DataBase from './RoadMaps/Data-Base';
import QuestionsBackEnd from './Questions/back-end';
import QuestionsGame from './Questions/Game-Development';
import QuestionsML from './Questions/Machine-Learning';
import QuestionsAI from './Questions/AI';
import QuestionsCyberSecurity from './Questions/cyber-security';
import QuestionsDevOps from './Questions/DevOps';
import QuestionsBlockchain from './Questions/blockchain';
import QuestionsUIUX from './Questions/UI-UX';
import QuestionsTesting from './Questions/Testing';
import QuestionsDataBase from './Questions/Data-Base';
import QuestionsMopileDevelopment from './Questions/MopileApplication';
import QuestionsDataScience from './Questions/data-science';
import QuestionsEmbedded from './Questions/Embedded';
import Embedded from './RoadMaps/Embedded' ;
import RoadmapCircleFrontEnd from './Charts/front-end';
import RoadmapCircleBackEnd from './Charts/Back-End';
import RoadmapCircleMopileApplication from './Charts/MopileApplication';
import RoadmapCircleGameDevelopment from './Charts/Game-Development';
import RoadmapCircleDevops from './Charts/DevOps';
import RoadmapCircleMachineLearning from './Charts/Machine-Learning';
import RoadmapCircleAI from './Charts/AI';
import RoadmapCircleCyberSecurity from './Charts/cyber-security';
import RoadmapCircleBlockChain from './Charts/blockchain';
import RoadmapCircleUIUX from './Charts/UI-UX';
import RoadmapCircleTesting from './Charts/Testing';
import RoadmapCircleDataBase from './Charts/Data-Base';
import RoadmapCircleEmbedded from './Charts/Embedded';

function App() {
  return(
      <>
        <Routes>
          <Route path='/' element={<LaunchPad/>}/>
          <Route path='/dashBoard' element={<DashBoard/>}>
            <Route path='/dashBoard' element={<FrontEnd/>}/>
            {/* Road Maps */}
            <Route path='front-end' element={<FrontEnd/>}/>
            <Route path='back-end' element={<BackEnd/>}/>
            <Route path='mobileApplication' element={<MopileApplication/>}/>
            <Route path='devops' element={<DevOps/>}/>
            <Route path='gameDevelopment' element={<GameDevelpMent/>}/>
            <Route path='datascience' element={<DataScience/>}/>
            <Route path='ml' element={<MachineLearning/>}/>
            <Route path='ai' element={<AI/>}/>
            <Route path='cybersecurity' element={<CyberSecurity/>}/>
            <Route path='blockchain' element={<BlockChain/>}/>
            <Route path='uiux' element={<UIUX/>}/>
            <Route path='testing' element={<Testing/>}/>
            <Route path='database' element={<DataBase/>}/>
            <Route path='embedded' element={<Embedded/>}/>
            {/* // Road Maps // */}
            {/* Questions */}
            <Route path='front-end-questions' element={<QuestionsFrontEnd/>}/>
            <Route path='back-end-questions' element={<QuestionsBackEnd/>}/>
            <Route path='mobile-questions' element={<QuestionsMopileDevelopment/>}/>
            <Route path='game-questions' element={<QuestionsGame/>}/>
            <Route path='datascience-questions' element={<QuestionsDataScience/>}/>
            <Route path='ml-questions' element={<QuestionsML/>}/>
            <Route path='ai-questions' element={<QuestionsAI/>}/>
            <Route path='cybersecurity-questions' element={<QuestionsCyberSecurity/>}/>
            <Route path='devops-questions' element={<QuestionsDevOps/>}/>
            <Route path='blockchain-questions' element={<QuestionsBlockchain/>}/>
            <Route path='uiux-questions' element={<QuestionsUIUX/>}/>
            <Route path='testing-questions' element={<QuestionsTesting/>}/>
            <Route path='database-questions' element={<QuestionsDataBase/>}/>
            <Route path='embedded-questions' element={<QuestionsEmbedded/>}/>
            {/* // Questions // */}
            {/* Charts */}
            <Route path='front-end-cities' element={<RoadmapCircleFrontEnd/>}/>
            <Route path='back-end-cities' element={<RoadmapCircleBackEnd/>}/>
            <Route path='mobile-cities' element={<RoadmapCircleMopileApplication/>}/>
            <Route path='game-cities' element={<RoadmapCircleGameDevelopment/>}/>
            <Route path='devops-cities' element={<RoadmapCircleDevops/>}/>
            <Route path='dataScience-cities' element={<RoadmapCircleDevops/>}/>
            <Route path='ml-cities' element={<RoadmapCircleMachineLearning/>}/>
            <Route path='ai-cities' element={<RoadmapCircleAI/>}/>
            <Route path='cybersecurity-cities' element={<RoadmapCircleCyberSecurity/>}/>
            <Route path='blockchain-cities' element={<RoadmapCircleBlockChain/>}/>
            <Route path='uiux-cities' element={<RoadmapCircleUIUX/>}/>
            <Route path='testing-cities' element={<RoadmapCircleTesting/>}/>
            <Route path='database-cities' element={<RoadmapCircleDataBase/>}/>
            <Route path='embedded-cities' element={<RoadmapCircleEmbedded/>}/>
            {/* // Charts // */}
            <Route path='calender' element={<Calendar/>}/>
          </Route>
        </Routes>
      </>
  )
}

export default App
