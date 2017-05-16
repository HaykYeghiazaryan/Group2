import React from 'react';

import GroupUsers from './GroupUsers.js';
import AllUsers from './AllUsers.js';

class UserData extends React.Component{
			render(){
				const {name,surname,email,desc,number,trueFalse}=this.props.data;
				const {editData,deleteUser,showInp,hideAllInp,editIndex,nameClick,showInpGroup,hideAllInpGroup,user,addGroup,indexGroup,group}=this.props;
				if(nameClick=="indexGroup"){
					var usData=group[indexGroup].users;
				}
				
				return(
					<div>
						{nameClick=="index" ? 
						<div>
						{trueFalse[0]==true ? <div>
							<input type="text" className="input" placeholder="Name" value={name} autoFocus onBlur={()=>hideAllInp(editIndex)} onChange={(e)=>editData("name",e.target.value,editIndex,"user")} />	
						</div> : 
						<div>
							<div className="itemHeader" onClick={()=>showInp(editIndex,0)}>{name}</div>
						</div>}
						{trueFalse[1]==true ? <div>
							<input type="text" className="input" placeholder="Name" value={surname} autoFocus onBlur={()=>hideAllInp(editIndex)} onChange={(e)=>editData("surname",e.target.value,editIndex,"user")} />	
						</div> : 
						<div>
							<div className="itemHeader" onClick={()=>showInp(editIndex,1)}>{surname}</div>
						</div>}
						{trueFalse[2]==true ? <div>
							<input type="text" className="input" placeholder="Name" value={email} autoFocus onBlur={()=>hideAllInp(editIndex)} onChange={(e)=>editData("email",e.target.value,editIndex,"user")} />	
						</div> : 
						<div>
							<div className="itemHeader" onClick={()=>showInp(editIndex,2)}>{email}</div>
						</div>}
						{trueFalse[3]==true ? <div>
							<textarea type="text" className="input" placeholder="Write Information..." autoFocus onBlur={()=>hideAllInp(editIndex)} value={desc} onChange={(e)=>editData("desc",e.target.value,editIndex,"user")} ></textarea>
						</div> : 
						<div>
							<div className="itemHeader itemTextarea" onClick={()=>showInp(editIndex,3)}>{desc}</div>
						</div>}
						<button className="but" onClick={()=>deleteUser(editIndex,"user")}>Delete</button>
						</div> : 
						<div>
							{trueFalse==true ? <div>
								<input type="text" className="input" placeholder="Name" value={name} autoFocus onBlur={()=>hideAllInpGroup(editIndex)} onChange={(e)=>editData("name",e.target.value,editIndex,"group")} />	
							</div> : 
							<div>
								<div className="itemHeader itemHeaderGroup" onClick={()=>showInpGroup(editIndex)}>{name}</div>
							</div>}
							{usData.map((item, i) => {
                                return (
                                	<GroupUsers key={i} data={item} />
                                );
                            })}
							<AllUsers user={user} addGroup={addGroup} indexGroup={indexGroup} />
							<button className="but" onClick={()=>deleteUser(editIndex,"group")}>Delete Group</button>
						</div>
					}
					</div>
				);
			}
		}
export default UserData;