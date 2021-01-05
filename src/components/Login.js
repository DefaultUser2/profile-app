import React from 'react';

class Login extends React.Component {
   constructor(props) {
     super(props);
     this.logIn = this.logIn.bind(this);
     this.handleEmailChange = this.handleEmailChange.bind(this);
     this.handlePasswordChange = this.handlePasswordChange.bind(this);
     this.state = {
       email:'',
       password:'',
     };
   }

   logIn(){
    // username and password hardcoded to 'admin'
    if(this.state.email === "admin" && this.state.password === "admin")
    {
      this.props.history.push({
        pathname: '/home',
      })
    }
}
   handleEmailChange(e){
     this.setState({email:e.target.value})
   }
   handlePasswordChange(e){
     this.setState({password:e.target.value})
   }
   render() {

   return (
      <div>
         <h1>Login</h1>
           <label for="inputEmail" className="sr-only">Email address</label>           
           <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address - please use 'admin'" required autofocus />
           <p>
           <label for="inputPassword" className="sr-only">Password</label>
           <input type="password" onChange={this.handlePasswordChange}  id="inputPassword" className="form-control" placeholder="Password - please use 'admin'" required />
           </p>
           <p>
           <button className="btn btn-lg btn-primary btn-block" onClick={this.logIn}  type="button">Log in</button>
            </p>
      </div>
   );
}
}
export default Login;

 
