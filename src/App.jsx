import './App.css'
import Taskcard from './components/Taskcard'

function App() {

  return (
    <>
      <div>
        <p className='text-white font-semibold font-serif text-center mt-[2rem] text-[1.5rem] md:text-[3.3rem]'>Einzenhower's To-Do</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col md:flex-row md:flex-wrap '>
          <Taskcard heading={"IMPORTANT | URGENT"}/>
          <Taskcard heading={"IMPORTANT | NOT-URGENT"}/>
        </div>
        <div className='flex flex-col md:flex-row md:flex-wrap '>
          <Taskcard heading={"NOT-IMPORTANT | URGENT"}/>
          <Taskcard heading={"NOT-IMPORTANT | NOT-URGENT"}/>
        </div>
      </div>
     
      
    </>
  )
}

export default App
