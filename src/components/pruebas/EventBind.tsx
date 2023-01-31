import React, { Component } from 'react'

interface EventProps {
    user: any
}

interface EventState {
    message: string
}

class EventBind extends Component<EventProps, EventState> {

    constructor(props: EventProps) {
      super(props)
    
      this.state = {
          message: 'Hello'
      }
    }

    clickHandler() {
        this.setState({
            message: 'Bye Bye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=> this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind