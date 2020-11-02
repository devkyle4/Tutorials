import React,{Component} from 'react'

class AddTodo extends Component{
	state = {
		content:null
	}

    handleSubmit = (e)=>{
      e.preventDefault();
      this.props.addTodo(this.state);

      this.setState({
        content:''
       })
    }
		
	handleChange = (e)=>{
		this.setState({
          content:e.target.value
      })
	}

	render(){
         return(
            <div>
		        <form onSubmit= {this.handleSubmit} >
		           <input type="text" onChange={this.handleChange} value={this.state.content}/>
		           <button className="submit-btn" type="submit">Add to Todo</button>
		        </form>
		    </div>
         )
	}
  
}

export default AddTodo