/**
 * Created by Geeks on 4/1/2017.
 */
import React from 'react';
import User from './User'

class UserList extends React.Component{
    render(){
        if(Object.getOwnPropertyNames(this.props.users).length===0){
            return(<div></div>)
        }
        var userNodes=this.props.users.map(function (user) {
           return(
               <div>
                   <User name={user.name} email={user.email} key={user.id}/>

               </div>
           )
        });
        return(
            <div>
                <h3>User List </h3>
                {userNodes}
            </div>
        )
    }
}
export default UserList;