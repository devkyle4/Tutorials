import React,{Component} from 'react';
import Todo from './todo'
import AddTodo from './addTodo'

class App extends React.Component{
   state = {
   	 todos: [
   	 { id:1, content:"Take a stroll outside Oxford" },
   	 { id:2, content:"Go to the Museums gallery " }
   	  ]
   }

   deleteTodo = (id)=>{
   	let todos = this.state.todos.filter(todo=>{
   		return id !== todo.id
   	})

   	this.setState({
   		todos
   	})
   }

   addTodo = (todo)=>{
   	  todo.id = Math.random()
      let Todo = [...this.state.todos,todo];

       this.setState({
       	todos:Todo
       })
   }

   render(){
   	return(
   		<div>
   		    <h2>Welcome To Excalibur Todos</h2>
			<Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
			<AddTodo addTodo={this.addTodo} />
   		</div>
   	)
   }
}

export default App 