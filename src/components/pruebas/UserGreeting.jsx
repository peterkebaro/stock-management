import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

    render() {
        //ternary conditional
        return (
            this.state.isLoggedIn ?
                <div>Welcome Peter</div> :
                <div>Welcome Guess</div>
        )
  }
}

export default UserGreeting