/**
 * Created by Geeks on 4/1/2017.
 */
import React from 'react';


class User extends React.Component{
    render(){
        return(
            <div>
                {this.props.name} - {this.props.email}
            </div>
        )
    }
}
export default User;/**
 * Created by Geeks on 4/1/2017.
 */
