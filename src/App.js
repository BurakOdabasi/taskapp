
import { useState } from 'react';
import './App.css';
import TaskCreate from './compenents/TaskCreate';
import TaskList from './compenents/TaskList';

function App() {

  const [tasks,setTasks] = useState([])

  const createTask = (title,taskDesc) => {
    let createdTasks = [
      ...tasks,{
        id:Math.round(Math.random() * 999),
        title:title,
        taskDesc:taskDesc
      }
    ]
    setTasks(createdTasks)
  }

  const deleteTask = (id) => {
    let updatedTasks = tasks.filter(i => i.id !== id)
    setTasks(updatedTasks)
  }


  return (
    <div className="App">
  <TaskCreate onCreate={createTask}/>
  <h3>GÖREVLER</h3>
  <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
