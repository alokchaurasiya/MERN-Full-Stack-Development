import React, { useState } from 'react';
import './Todo.css';
import {AnimatePresence , motion} from 'framer-motion';

const Todo = () => {

    const [todoList, setTodoList] = useState([ 'Eat', 'Play', 'Sleep' ]);
    const [todotext, setTodotext] = useState("");

    const nums = [1, 2, 3, 4];

    const displayNums = () => {
        return nums.map( (n) => ( 
            <div className='card mt-5'>
                <div className='card-body'>
                    <h1>{n}</h1>
                </div>
            </div>
         ) )
    }

    const addtodo= () =>{
        if(todotext){
        setTodoList([...todoList,todotext]);
        setTodoList('');
        }
    }

    const removeTodo =(index) => {
        let temp = todoList;
        temp.splice(index,1);
        setTodoList([...temp]);
    }
        

    const displayTodoList = () => {
        return todoList.map( (task,index) => ( 
            <motion.div 
            initial={{opacity:0 ,scale:0.3}}  
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:0.8}}
            transition={{type: 'spring' ,duration:0.8}} 

             className='todo d-flex justify-content-between'>
            
                <p className='todo-text'>{task}</p>

            <button className='btn btn-danger' onClick={removeTodo}><i class="fas fa-trash    "></i></button>
            </motion.div>
         ) )
    }


  return (
    <AnimatePresence>
    <div className='container py-5'>
        <p className='display-4 text-center mb-5'>TODO LIST</p>
        <div className='input-group'>
            <input className='form-control' value={todotext} onChange={(e)=>{setTodotext(e.target.value)}} />
            <button className='btn btn-primary' onClick={addtodo}>Add New Task</button>
        </div>

        {/* calling function */}
        {displayTodoList()}
    </div>
    </AnimatePresence>
  )
}

export default Todo;
