import React,{Component} from 'react'

const Todo = ({todos, deleteTodo})=> { 

const listTodo = (todos.length)?(
   todos.map((todo)=>{
   	return(
   		<div className="collection-item" key={todo.id}>
  	          <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
  	    </div>
   	)    
  	})
   ):(<p className="center alert">Yay!! You have no todo left... </p>)
  	    


  
  return(
     <div className="collection todos">
             {listTodo}
     </div>
  )

}

export default Todo