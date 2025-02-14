import './App.css'
import Taskcard from './components/Taskcard'

function App() {

  return (
    <>
      <div>
        <p className='text-white font-semibold font-serif text-center mt-[2rem] text-[1.5rem]'>Einzenhower's To-Do</p>
      </div>
      <Taskcard/>
      <Taskcard/>
      <Taskcard/>
      <Taskcard/>
    </>
  )
}

export default App
