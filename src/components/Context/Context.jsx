import React, { createContext, useState } from 'react'
export const tasksContext= createContext()
export const TasksProvider = ({children}) => {
  const [Tasks, setTasks] = useState([])
  return (
    <tasksContext.Provider value={{Tasks,setTasks}}> 
        {children}
    </tasksContext.Provider>
  )
}
