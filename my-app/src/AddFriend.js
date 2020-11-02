import React, { Component } from 'react';

class AddFriend extends Component{

    state = {
        name:null,
        interest:null,
        age:null
    }

    handleChange= (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addFriend(this.state)
    }

    render(){
       return(
        <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input name='name' id='name' type='text' onChange={this.handleChange}/>

              <label htmlFor='interest'>Interest:</label>
              <input type='text' id='interest' name='interest' onChange={this.handleChange}/>

              <label htmlFor='age'>Age:</label>
              <input type='text' id='age' name='age' onChange={this.handleChange}/>

              <button className='frndBtn'>Add to Friends</button>
            </form>
        </div>
       )
       
    }


}

export default AddFriend