import React from 'react';
import {browserHistory} from 'react-router';


export default class Login extends React.Component{
constructor(){
    super();
  this.state={
    "username":"default",
    "password":"default"
  }
}
user(euser){
this.setState({"username":euser.target.value});
console.log(this.state.username);
}
pass(epass){
this.setState({password:epass.target.value});
}

check(){
  console.log("check login");
var login={
  "username":this.refs.user.value,
  "password":this.refs.pass.value
}
  console.log("login clicked");
  console.log(login);
  $.ajax({
    url:"/users/login",
    type: 'POST',
    data : login,
    success: function(data)
    {
      console.log("inside success");
      alert("Login Successful");
	  //browserHistory.push('/home');
      
    },
    error: function(err)
    {
      console.log(err);
      console.log("error!!!!");

      alert("username and/or password incorrect")
	  //browserHistory.push('/Login');
    }
  });
}

render(){
return (     
<div className="loginContainer">
  <section id="logincontent">
    <form action="">
      <h1>Sign in...</h1>
      <div>
        <input type="text" ref="user" placeholder="Username" required="" id="username" />
      </div>
      <div>
        <input type="password" ref="pass" placeholder="Password" required="" id="password" />
      </div>
      <div>
        <input type="submit" onClick={this.check.bind(this)}value="Log in" />
        
        <a href="#">Register</a>
      </div>
    </form>
    
  </section>
</div>


   )
   }
}
