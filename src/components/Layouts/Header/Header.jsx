import React, { useContext, useEffect, useState } from 'react'
import LogoReact from '../../../assets/react.svg'
import './Header.css'
import { tasksContext } from '../../Context/Context'
import  { v4 as uuid } from 'uuid';
import { ItemTasks } from '../../ItemTasks/ItemTasks';

export const Header = () => {
    const [PedingTaks, setPedingTaks] = useState(0)
    const [CountTaks, setCountTaks] = useState(0)

    const unique_id = uuid();
const context=useContext(tasksContext)
const [titleTask, setTitleTask] = useState('')
const [descriptionTask, setDescriptionTask] = useState('')
useEffect(() => {
    const pendingCount = context.Tasks.length
    setPedingTaks(pendingCount);
});

const handleCreateTasks=()=>{
    const newTask={
        _id:unique_id,
        title: titleTask,
        description:descriptionTask,
        state: false
    }
    let listTask = [...context.Tasks, newTask]
    context.setTasks(listTask)
    console.log(listTask);
    

}


  return (
    
    <header>
        <section className="TitleImg">
            <h1>Lista de Tareas</h1>
            <img src={LogoReact} alt="" />
        </section>
        <section className="DataEntry">
        <div className="TitleOfTasks">
            <h3>Titulo</h3>
            <input type="text" onChange={event=> setTitleTask(event.target.value)} placeholder='Ingrese el titulo' id='InputTitle' />
        </div>
        <div className="DescriptionOfTasks">
            <h3>Descripcion</h3>
            <input type="text" onChange={event=> setDescriptionTask(event.target.value)} placeholder='Ingrese la descripcion' id='InputDescription' />
        </div>
        <button type="submit" onClick={handleCreateTasks} >Crear</button>
        </section>
        <p className="TaskControl">
            Usted tiene <span id='CompleteTaks'>{CountTaks}</span> tareas completadas 
            y <span>{PedingTaks}</span> tareas pendientes
        </p>
        <hr />
    </header>
    )
}
