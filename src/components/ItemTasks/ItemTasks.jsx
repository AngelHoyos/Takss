import React, { useContext, useState } from 'react'
import './ItemTasks.css'
import { tasksContext } from '../Context/Context'

export const ItemTasks = ({Title,Description,_id}) => {
  const secondContext = useContext(tasksContext);

const [isActive, setIsActive] = useState(false)

  const handleCheckBOx=()=>{
  setIsActive(!isActive)
 const taa= secondContext.Tasks.map(ta=>{

  if (ta._id==_id) {
    console.log("bien")  
    return { ...ta, state: true }     

    
  }else {
    console.log("error");
    return { ...ta }
  }

  })
console.log(taa)
}
  return (
    <li className={isActive? `liSecondActive` : `liActive`} id={_id} >
      <div className={isActive? `pointActive` : `point`}/>
        <p className="title">{Title}</p>
        <p className="description">{Description}</p>
        <input type="checkbox" name="CheckoBOx" id="CheckoBOx" checked={isActive} onChange={handleCheckBOx}  />
    </li>
  )
}
