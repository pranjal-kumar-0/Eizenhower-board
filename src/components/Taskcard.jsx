import React, { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";

const Taskcard = ({ heading }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };


  return (
    <div className='bg-[#3700B3] mt-[2rem] m-[2.2rem] p-[0.5rem] rounded-[0.6rem] min-h-[25rem] md:min-h-[26.38rem] min-w-[18rem] md:min-w-[40rem]  flex flex-col max-h-[25rem]'>
      <p className='font-semibold text-blue-50 text-[1rem] text-center mt-[0.5rem] md:text-[1.8rem]'>
        {heading}
      </p>
      <div className='flex-grow flex flex-col justify-between min-h-[15rem] mt-2'>
        <div className='flex flex-col gap-2 overflow-y-auto '>
          {tasks.map((task, index) => (
            <div key={index} className='flex items-center bg-indigo-800 p-2 rounded'>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => toggleTask(index)}
                className='ml-2 w-5 h-5'
              />
              <p className={`ml-3 text-gray-200 w-full md:text-[1.3rem] ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.text}
              </p>
              <button onClick={() => deleteTask(index)} className='ml-2'>
                <MdDeleteOutline className='text-red-300 md:text-[1.5rem] md:hover:cursor-pointer' />
              </button>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-2 mt-3'>
          <div className='flex'>
            <input
              type='text'
              placeholder='Enter task...'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className='flex-grow p-2 rounded bg-indigo-950 text-blue-200 outline-none'
            />
            <button
              onClick={addTask}
              className='ml-2 bg-blue-700 p-2 rounded text-white text-[0.8rem] md:text-[1.2rem] hover:bg-blue-800 hover:cursor-pointer'
            >
              Add Task
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Taskcard;
