import React, { Component } from 'react'

interface LoginState{
    userName: string;
    password: string;
}

interface User {
    name: string;
    password: string;
}

interface LoginProps{
    user: User;
}

export default class SignIn extends Component<LoginProps, LoginState> {

    constructor(props: LoginProps) {
      super(props)
      this.state = {
          userName: '',
          password: ''
      }
    }

    loginUser(password: any) {
        console.log(password)
    }

  render() {
    return (
        <div className='SignInView'>
            <input
                placeholder='User'
                value={this.state.userName}
                onChange={(event) => this.setState({userName: event.target.value})}
            /><br/>
            <input
                placeholder='Password'
                type='password'
                value={this.state.password}
                onChange={(event) => this.setState({password: event.target.value})}

            /><br/>
            <button
                className='loginButton'
                onClick={() => this.loginUser(this.state.password)}
            >
            Login
            </button>
            
        
        </div>
    )
  }
}
