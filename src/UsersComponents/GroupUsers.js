import React from 'react';

class GroupUsers extends React.Component{
	render(){
		const {id,name}=this.props.data;
		return(
			<div className="itemHeader itemHeaderGroup itemHeaderGroupSmall">
				{name}
			</div>
		);
	}
}
export default GroupUsers;