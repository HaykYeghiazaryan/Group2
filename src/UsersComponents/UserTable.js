import React from 'react';

import UserList from './UserList.js';
import EditUser from './EditUser.js';

class UserTable extends React.Component{
	render(){
		const {user,group,userHeader,groupHeader,showAddUser,index,editData,editUserData,deleteUser,showInp,hideAllInp,indexGroup,type,changeType,nameClick,showInpGroup,hideAllInpGroup,addGroup}=this.props;
		return(
			<div className="content">
				<UserList user={user} header={userHeader} editUserData={editUserData} index={index} indexName="index" nameClick={nameClick} />
				<UserList user={group} header={groupHeader} index={indexGroup} editUserData={editUserData} index={indexGroup} indexName="indexGroup" nameClick={nameClick} />
				<EditUser user={user} group={group} showAddUser={showAddUser} index={index} indexGroup={indexGroup} editData={editData} deleteUser={deleteUser} showInp={showInp} hideAllInp={hideAllInp} type={type} changeType={changeType}  nameClick={nameClick} showInpGroup={showInpGroup} hideAllInpGroup={hideAllInpGroup} addGroup={addGroup} />
			</div>
		);
	}
}
export default UserTable;