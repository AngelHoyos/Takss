import React, { useContext } from 'react'
import './Filter.css'
import { tasksContext } from '../Context/Context'
import { ItemTasks } from '../ItemTasks/ItemTasks'
export const Filter = () => {
  const thirdOtherContext = useContext(tasksContext)
  const handleFilter=(event)=>{
    const eventeFilter=event.target.value
    if (eventeFilter==="earrings") {
      console.log("hola2");
      const ResultFilter=thirdOtherContext.Tasks.filter(task=>!task.state)
    } else if(eventeFilter==="resolved") {
      console.log("hola1");
      const ResultFilter=thirdOtherContext.Tasks.filter(task=>task.state)

    }else{
      const ResultFilter=thirdOtherContext.Tasks
    }
  }
  return (
    <div className='filter'>
      <p className='fil'>Filtrar:</p>
      <select name="option" id="option" onChange={handleFilter}>
        <option value="text">Selecciona una...</option>
        <option value="all">todas</option>
        <option value="earrings" >pendientes</option>
        <option value="resolved">resueltas</option>
      </select>
    </div>
  )
}
