import React from 'react';

import UserData from './UserData.js';

class EditUser extends React.Component{
	render(){
		const {user,group,showAddUser,index,indexGroup,editData,deleteUser,showInp,hideAllInp,type,changeType,nameClick,showInpGroup,hideAllInpGroup,addGroup}=this.props;
		return(
			<div className="edit">
				<div className="AddUs">
					<select className="input select"  onChange={(e)=>changeType(e.target.value)} >
						<option value="user">User</option>
						<option value="group">Group</option>
					</select>
					<button className="but" onClick={()=>showAddUser(type)} >Add</button>
				</div>
				<div className="editText">
				{nameClick=="index" ? user.map((item, i) => {
                    return (
                       	<div key={i}>
                       	{(index==i) ? <UserData   data={item} editData={editData} deleteUser={deleteUser} showInp={showInp} hideAllInp={hideAllInp} editIndex={i} nameClick={nameClick} indexGroup={indexGroup} group={group} /> : ""}
                    	</div>
                    );
       	            }) : group.map((item, i) => {
                    return (
                      	<div key={i}>
                         	{(indexGroup==i) ? <UserData   data={item} editData={editData} deleteUser={deleteUser} showInp={showInp} hideAllInp={hideAllInp} editIndex={i} nameClick={nameClick} showInpGroup={showInpGroup} hideAllInpGroup={hideAllInpGroup} user={user} group={group} addGroup={addGroup} indexGroup={indexGroup} /> : ""}
                       	</div>
                    );
                })}
				</div>
			</div>
		);
	}
}
export default EditUser;