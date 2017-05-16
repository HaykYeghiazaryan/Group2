import React from 'react';

import Add from './UsersComponents/Add.js';
import UserTable from './UsersComponents/UserTable.js';

class Users extends React.Component{
	constructor(props){
		super(props);
		this.state={
			user:[],
			group:[],
			name:"",
			surname:"",
			email:"",
			desc:"",
			showAdd:false,
			index:0,
			indexGroup:0,
			indexName:"index",
			count:0,
			type:"user"
		}
	}
	changeValue=(valName,value)=>{ this.setState({[valName]:value}); }
	addUser=(addName,type)=>{
		const {user,group,name,surname,email,desc,count,index} = this.state;
		var obj={};
		if(addName=="add"){
			if(type=="user"){
				obj = {
					name:name,
					surname:surname,
					email:email,
					desc:desc,
					number:count,
					show:true,
					trueFalse:[false,false,false,false],
				}
				user.push(obj);
				this.setState({
					user,
					showAdd:false,
					count:count+1,
					indexName:"index",
				})
			}else{
				obj = {
					name:name,
					users:[],
					trueFalse:false,
				}
				group.push(obj);
				this.setState({
					group,
					showAdd:false,
					indexName:"indexGroup",
				})
			}
		}
		if(addName=="close"){
			this.setState({showAdd:false,})
		}
		this.setState({
			name:"",
			surname:"",
			email:"",
			desc:"",
		})
	}
	showAddUser=()=>{ this.setState({ showAdd:true }) }
	editData=(valName,value,index,type)=>{
		var obj=this.state[type][index];
		obj[valName]=value;
		this.state[type].splice(index,1,obj);
		this.setState({[type]:this.state[type]});
	}
	showInp=(index,num)=>{
		var obj=this.state.user[index];
		for(var i=0;i<obj.trueFalse.length;i++){
			obj.trueFalse[i]=false;
		}
		const {trueFalse}=obj;
		const {user}=this.state;
		trueFalse.splice(num,1,true);
		user.splice(index,1,obj);
		this.setState({user});
	}
	showInpGroup=(index)=>{
		var obj=this.state.group[index];
		obj.trueFalse=true;
		const {group}=this.state;
		group.splice(index,1,obj);
		this.setState({group});
	}
	hideAllInp=(index)=>{
		var obj=this.state.user[index];
		obj.trueFalse=[false,false,false,false];
		const {user}=this.state;
		user.splice(index,1,obj);
		this.setState({user});
	}
	hideAllInpGroup=(index)=>{
		var obj=this.state.group[index];
		obj.trueFalse=false;
		const {group}=this.state;
		group.splice(index,1,obj);
		this.setState({group});
	}
	editUserData=(index,indexName)=>{
		if(indexName=="index"){
			this.setState({index,indexName});
		}else{
			this.setState({indexGroup:index,indexName});
		}
	}
	deleteUser=(index,type)=>{
		this.state[type].splice(index,1);
		if(index==0){
			var y=index;
		}else{
			var y=index-1
		}
		this.setState({type:this.state[type],index:y});
	}
	changeType=(type)=>{ this.setState({type}); }
	addGroup=(name,id,groupIndex)=>{
		var obj=this.state.group[groupIndex];
		var object={
			id:id,
			name:name,
		}
		var arr=obj.users;
		arr.push(object);
		const {group}=this.state;
		group.splice(groupIndex,1,obj);
		this.setState({group});
	}
	render(){
		const {user,group,name,surname,email,desc,showAdd,showAddUser,index,indexGroup,type,indexName}=this.state;
		return(
			<div className="usersDiv">
				<Add changeValue={this.changeValue} name={name} surname={surname} email={email} desc={desc} addUser={this.addUser} showAdd={showAdd} index={index} type={type} />
				<UserTable user={user} group={group} userHeader="Users" groupHeader="Groups" showAddUser={this.showAddUser} index={index} editData={this.editData} editUserData={this.editUserData} deleteUser={this.deleteUser} showInp={this.showInp} hideAllInp={this.hideAllInp} indexGroup={indexGroup} type={type} changeType={this.changeType} nameClick={indexName} showInpGroup={this.showInpGroup} hideAllInpGroup={this.hideAllInpGroup} addGroup={this.addGroup} />
			</div>
		);
	}
}
export default Users;