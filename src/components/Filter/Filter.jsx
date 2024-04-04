import React, { useContext,useState } from 'react'
import './Filter.css'
import { tasksContext } from '../Context/Context'
export const Filter = () => {
  const thirdOtherContext = useContext(tasksContext)
  const ResultFilter = thirdOtherContext.Tasks.filter(task=>task.state)
  const ResultFilte2 = thirdOtherContext.Tasks.filter(task=>!task.state)
  const [CopieTasks, setCopieTasks] = useState([])
  const handleFilter=(event)=>{
    const eventeFilter=event.target.value
    thirdOtherContext.Tasks.filter(CopieTasks=>{
      if (eventeFilter==="earrings") {
        ResultFilte2
        

      } else if(eventeFilter==="resolved") {
        ResultFilter
        setCopieTasks(ResultFilter)

      }else{
        thirdOtherContext.Tasks
      }

    })
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
