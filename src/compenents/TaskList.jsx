import React from 'react'
import "../App.css";

const TaskList = ({ tasks,onDeleteTask }) => {
return (
    <div className='task-list'>
    {tasks.map((task,index) => {
        return ( <div key={index} className='task-show'>
            <h3>Göreviniz</h3>
            <p>{task.title}</p>
            <h3>Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <button className='btn-delete' onClick={() => onDeleteTask(task.id)}>Sil</button>
        </div>
        );
    })}
    </div>
);
};

export default TaskList
