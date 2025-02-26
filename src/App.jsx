import './App.css'
import Taskcard from './components/Taskcard'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/"
          element={
            <div>
              <p className='text-white font-semibold font-serif text-center mt-[2rem] text-[1.5rem] md:text-[3.3rem]'>Einzenhower's To-Do</p>
              <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row md:flex-wrap '>
                  <Taskcard heading={"IMPORTANT | URGENT"} isImportant={true} isUrgent={true}/>
                  <Taskcard heading={"IMPORTANT | NOT-URGENT"} isImportant={true} isUrgent={false}/>
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap '>
                  <Taskcard heading={"NOT-IMPORTANT | URGENT"} isImportant={false} isUrgent={true}/>
                  <Taskcard heading={"NOT-IMPORTANT | NOT-URGENT"} isImportant={false} isUrgent={false}/>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
