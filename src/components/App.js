import React from 'react';
import UserList from './UserList';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions/userActions"
@connect((store)=>{
    return{
        users:store.users.users
    }
})
class AppComponent extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchUsers());
    }
    render(){
        //console.log(this.props.users);
        return(
            <div>
                <h3>Hello</h3>
                <UserList users={this.props.users}/>
            </div>
        )
    }
}
export default AppComponent