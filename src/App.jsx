import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegisterationPage from "./pages/registeration"
import LoginPage from './pages/login'
import DashboardPage from './pages/dashBoard'
import Homepage from './components/homepage/Homepage'


function App() {

  return (
    <Routes>
       <Route path='/home' element={<Homepage/>}/>
      <Route path='/register' element={<RegisterationPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
    </Routes>

  )
}

export default App



