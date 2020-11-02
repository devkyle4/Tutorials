import Nav from './nav'
import React, { Component } from 'react';
import AddFriend from './AddFriend'
// eslint-disable-next-line no-unused-vars
import AddFriendcss from './AddFriend.css'
import ('./App.css')


class App extends Component{
   state = {
    friends:[
        {name:"Fidelis", interest:"Football" ,age:25 ,id:1},
        {name:"Kwame", interest:"Rugby", age:45, id:2},
        {name:"Temas", interest:"Wrestling", age:15, id:3}
    ]
}

 addfriend = (friend) => {
    friend.id = (Math.random()*100);
    let friends = [...this.state.friends,friend]
    this.setState({
         friends:friends
    })
}

deletefriend =(id)=>{ 
  let friends = this.state.friends.filter((friend)=>{
   return friend.id !== id
}) 

 this.setState({
    friends:friends
 })
}
  
  render(){
  return (
    <div className="App">
          <h1>Hello</h1>
          <Nav deleteFriend={this.deletefriend} friends={this.state.friends}/>
          <AddFriend addFriend={this.addfriend}/>
    </div>
  );
   }
}

// function App() {
//   const state = {
//     friends:[
//         {name:"Fidelis", interest:"Football",age:25},
//         {name:"Kwame", interest:"Rugby",age:45},
//         {name:"Temas", interest:"Wrestling",age:15}
//     ]
// }
//   return (
//     <div className="App">
//           <h1>Hello</h1>
//           <Nav friends={state.friends}/>
//     </div>
//   );
// }

export default App;
