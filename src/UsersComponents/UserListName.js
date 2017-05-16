import React from 'react';

class UserListName extends React.Component{
	render(){
		const {name,number}=this.props.data;
		const {editUserData,divClass,editIndex,indexName,indexGroup}=this.props;
		return(
			<div  className={divClass} onClick={()=>editUserData(editIndex,indexName)} >
                {name}
            </div>
		);
	}
}
export default UserListName; 