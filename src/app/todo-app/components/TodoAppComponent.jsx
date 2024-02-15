"use client"

import {CheckSquare, Edit, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const data = [
    {id:1, todo: "Fasting and Praying Today"},
    {id:2, todo: "Reading and Studing Today"},
    {id:3, todo: "Going to church and gamiing Today"},
    {id:4, todo: "Going for celebration today"},
    {id:5, todo: "We are going for fellowship"},
]

function TodoAppComponent() {
    
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []

    const [tasks, setTasks] = useState(storedTasks)
    const [newTask, setNewTask] = useState("")
    const [error, setError] = useState(false)
    const [completedTask, setCompletedTask] = useState(false)
    
    //Effect to get tasks from localstorage on component mount
    // useEffect(() => {
    //     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []
    //     setTasks(storedTasks)
    // }, [])

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
                className=' shadow-md outline-none ring-1 ring-yellow-200 md:w-[270px] p-2 rounded-md'
                placeholder='Start typing...' />
                <button type='submit' className=' bg-yellow-500 rounded-md p-1 text-white'>Add task</button>
            </form>
        </div>

        {error &&  <span className=' text-red-500'>Length of task must be greater than 4</span>}


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