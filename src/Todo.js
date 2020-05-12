import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function Todo() {
  const [tasks,setTasks] = useState([]);

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  const handleEdit = (index, value) => {
    const newArr = [...tasks];
    newArr[index] = value;
    setTasks(newArr);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTask = event.target.newTask.value;
    const newArr = [...tasks];
    newArr.push(newTask);
    setTasks(newArr);
    event.target.newTask.value = ""
  }

  const Tasks = (props) => {
    return(
      <div className='form-inline'>
        <input 
            type="text"  
            defaultValue={props.content} 
            onBlur={event => handleEdit(props.id, event.target.value)}/>
        <button 
            className="btn btn-danger btn-sm" 
            onClick = {handleDelete} 
            style={{margin: 5}}>
        x</button>
      </div>
    );
  }

  const DisplayTasks = () => {
    return tasks.map((newTask, index) => {
      return <Tasks content={newTask} key={index} id={index} />
    })
  }

  return (  
    <div>
        <h1>TASKS LIST</h1>
        
        <DisplayTasks />
        
        <form className = "form-inline" onSubmit = {handleSubmit}>
            <input type="text" name="newTask" id="newTask" placeholder="Add new task" required/>
            <button className='btn btn-success btn-sm' style={{margin: 5}}>+</button>
        </form>
    </div>   
  );
}

export default Todo;