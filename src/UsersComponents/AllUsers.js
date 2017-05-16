import React from 'react';

import UserListNameAdd from './UserListNameAdd.js';

class AllUsers extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showUsers:false,
		}
	}
	showHide=(show)=>{
		this.setState({showUsers:!show})
	}
	render(){
		const {user,addGroup,indexGroup}=this.props;
		const {showUsers}=this.state
		return(
			<div className="UsersDiv">
				<div className="Header" onClick={()=>this.showHide(showUsers)} >
					{showUsers ? "Hide" : "Show"} Users
				</div>
				{showUsers && <div className="users">
					{user.map((item, i) => {
                        return (
                         	<UserListNameAdd key={i} data={item} divClass="us" addGroup={addGroup} indexGroup={indexGroup} />
                        );
                    })}
				</div>}
			</div>
		);
	}
}
export default AllUsers;