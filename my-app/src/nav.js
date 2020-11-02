import React from 'react';

 const Navbar = ({friends, deleteFriend})=>{
    const friendsList = friends.map(friend=>{
        return(
           <div key={friend.id}>
               <ul >
                   <li>{friend.name}</li>
                   <li>{friend.interest}</li>
                   <li>{friend.age}</li>
                   <button onClick={ ()=> {deleteFriend(friend.id)}}>Delete Friend</button>
               </ul>
           </div>
        )          
       })

       return(
        <div>
        {friendsList}
        </div>
    )      
         
}

export default Navbar