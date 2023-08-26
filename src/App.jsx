import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegisterationPage from "./pages/registeration"
import LoginPage from './pages/login'
import DashboardPage from './pages/dashBoard'
import JoinQuizPage from './pages/joinquiz'
import CreateQuizPage from './pages/creatquiz'


function App() {

  return (
    <>
    <Routes>
      <Route path='/register' element={<RegisterationPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
      <Route path='/joinquiz' element={<JoinQuizPage/>}/>
      <Route path='/createquiz' element={<CreateQuizPage/>}/>

    </Routes>
    </>
  )
}

export default App



