import React from  'react';

class Add extends React.Component{
	render(){
		const {changeValue,name,surname,email,desc,addUser,showAdd,type}=this.props;
		return(
			<div>
				{showAdd && <div className="addDivContent">
					<div className="addDiv">
						<input type="text" className="input" placeholder="Name" value={name} onChange={(e)=>changeValue("name",e.target.value)} />
						{(type=="user") ? <div><input type="text" className="input" placeholder="Surname" value={surname} onChange={(e)=>changeValue("surname",e.target.value)} />
						<input type="text" className="input" placeholder="Email" value={email} onChange={(e)=>changeValue("email",e.target.value)} />
						<textarea type="text" className="input" placeholder="Write Information..." value={desc} onChange={(e)=>changeValue("desc",e.target.value)} ></textarea></div> : ""}
						<button name="add" className="but" onClick={(e)=>addUser(e.target.name,type)}>Add</button>
						<button name="clear" className="but" onClick={(e)=>addUser(e.target.name,type)}>Clear</button>
						<button name="close" className="but" onClick={(e)=>addUser(e.target.name,type)}>Close</button>
					</div>
				</div>}
			</div>
		);
	}
}
export default Add;