import React, { useContext  } from 'react'
import './Main.css'
import { Filter } from '../../Filter/Filter'
import { Tasks } from '../../Tasks/Tasks'
import { ItemTasks } from '../../ItemTasks/ItemTasks'
import { tasksContext } from '../../Context/Context'
export const Main = () => {
  const otherContext=useContext(tasksContext)

  return (
    <main>
      <Filter/>
      <Tasks>
      {
        otherContext.Tasks.map(taks=>
        <ItemTasks key={taks._id} _id={taks._id} Title={taks.title} Description={taks.description}
        /> 
        )

      }
      </Tasks>
    </main>
  )
}
