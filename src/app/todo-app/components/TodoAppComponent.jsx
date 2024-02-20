"use client"

import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'


function TodoAppComponent() {

    // Check if localStorage is available
  const isLocalStorageAvailable = typeof localStorage === 'undefined';

  // Load tasks from local storage or use an empty array
  const storedTasks = isLocalStorageAvailable
    ? [] :  JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(storedTasks)
    const [newTask, setNewTask] = useState("")
    const [error, setError] = useState(false)
    const [completedTask, setCompletedTask] = useState(false)
    

    //Effect to save tasks to localstorage whenever task changes
    useEffect(() => {
       localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleSubmitAddTask = (e) => {
        e.preventDefault()

        if(newTask.trim !== "" && newTask.length > 4){
            setTasks([...tasks, {text: newTask, completed: false}])
            setNewTask("")
            setError(false)
        } else{
           setError(true)
        }
    }


    const toggleCompletedTask = (idx) => {
        const updatedTasks = [...tasks]
        updatedTasks[idx].completed = !updatedTasks[idx].completed
        setTasks(updatedTasks)
        setCompletedTask(!completedTask)
    }


    const handleEditTask = (idx, newTask) => {
        const updatedTasks = [...tasks]
        updatedTasks[idx].text = newTask

        setTasks(updatedTasks)
    }

    const handleDeleteTask = (idx) => {
        const updatedTasks = [...tasks]

        updatedTasks.splice(idx, 1)

        setTasks(updatedTasks)
    }



  return (
    <div className=' bg-white shadow-md rounded-lg p-5 flex flex-col gap-4 w-[90vw] md:w-[400px]'>
        {/* INPUT_CREATE_FIELD */}
        <div>
            <form onSubmit={handleSubmitAddTask} className=' flex flex-row gap-2'>
                <input 
                type="text" 
                value={newTask}
                onChange={handleInputChange}
                className=' shadow-md outline-none ring-1 ring-yellow-200 w-[160px] md:w-[270px]  p-2 rounded-md'
                placeholder='Start typing...' />
                <button type='submit' className=' bg-yellow-500 rounded-md p-1 text-white text-sm'>Add task</button>
            </form>
        </div>

        {error &&  <span className=' text-red-500 text-sm'>Length of task must be more than 4 characters</span>}


        {/* RENDER_COMPONENT */}
        <div className=' flex flex-col gap-4'>
            {
                tasks.map((task, idx) => (
                <div key={idx} className=' ring-1 ring-green-200 p-2 text-yellow-800 flex flex-row gap-4 items-center justify-between'>
                    <p>{idx + 1}. {task.text}</p>
                    <div className=' flex flex-row gap-2 items-center'>
                    <input
                     type='checkbox'
                     checked={task.completed}
                     onChange={() => toggleCompletedTask(idx)}
                     className=' text-green-500 bg-green-500 cursor-pointer h-4 w-4'
                     />
                    <Edit 
                     onClick={() => handleEditTask(idx, prompt("Edit;", task.text))}
                     className=' text-green-500 cursor-pointer' 
                     size={14} />
                    <Trash 
                    onClick={() => handleDeleteTask(idx)}
                    className=' text-red-500 cursor-pointer'
                    size={14} />
                    </div>
                </div>
                ))
            }
        </div>
        {tasks.length === 0 && <p className=' text-sm ring-1 ring-red-300 p-2 text-red-500'>Opps! No task yet. But you can add one anyway!</p>}
    </div>
  )
}

export default TodoAppComponent