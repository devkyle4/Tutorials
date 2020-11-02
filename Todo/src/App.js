import React,{Component} from 'react';

class App extends React.Component{
   state = {
   	 todos: [
   	 { id:1, content:"Take a stroll outside Oxford" },
   	 { id:2, content:"Go to the Museums gallery " }
   	  ]
   }

   render(){
   	return(
   		<div>
   		    <h2>Welcome To Excalibur\'s Todo</h2>
			
   		</div>
   	)
   }
}

export default App 