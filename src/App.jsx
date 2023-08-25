import './App.css'
import { Route, Routes } from 'react-router-dom'
import RegisterationPage from "./pages/registeration"
import LoginPage from './pages/login'



function App() {

  return (
    <Routes>
      <Route path='/register' element={<RegisterationPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>

  )
}

export default App



