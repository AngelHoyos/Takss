import React, { useContext, useState } from 'react';
import './ItemTasks.css';
import { tasksContext } from '../Context/Context';

export const ItemTasks = ({ Title, Description, _id }) => {
    const context = useContext(tasksContext); // Cambié el nombre de la variable de "secondContext" a "context"
    const [isActive, setIsActive] = useState(false);

    const handleCheckBox = () => {
        setIsActive(!isActive);
        const updatedTasks = context.Tasks.map(task => {
            if (task._id === _id) {
                return { ...task, state: true }; // Actualiza el estado de la tarea
            } else {
                return task;
            }
        });
        context.setTasks(updatedTasks); // Actualiza el estado del contexto con las tareas actualizadas
        console.log(updatedTasks);
    };

    return (
        <li className={isActive ? 'liSecondActive' : 'liActive'} id={_id}>
            <div className={isActive ? 'pointActive' : 'point'} />
            <p className="title">{Title}</p>
            <p className="description">{Description}</p>
            <input type="checkbox" checked={isActive} onChange={handleCheckBox} />
        </li>
    );
};
