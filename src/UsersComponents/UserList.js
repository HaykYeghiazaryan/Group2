import React from 'react';

import UserListName from './UserListName.js';

class UserList extends React.Component{
	render(){
		const {user,editUserData,index,header,indexName,nameClick}=this.props;
		const {name}=user;
		return(
			<div className="usersList">
				<div className="Header">
					{header.toUpperCase()}
				</div>
				<div className="users">
					{user.map((item, i) => {
                        return (
                          	<UserListName key={i} data={item} editIndex={i} editUserData={editUserData} indexName={indexName} nameClick={nameClick} index={index} divClass={(i==index & nameClick==indexName) ? "usHover" : "us"} />
                        );
                    })}
				</div>
			</div>
		);
	}
}
export default UserList;