import React from 'react';

class UserListNameAdd extends React.Component{
	render(){
		const {name,number,show}=this.props.data;
		const {addGroup,divClass,indexGroup}=this.props;
		return(
			<div>
			{show && <div  className={divClass} onClick={()=>addGroup(name,number,indexGroup)} >
                {name}
            	</div>}
             </div>
		);
	}
}
export default UserListNameAdd;