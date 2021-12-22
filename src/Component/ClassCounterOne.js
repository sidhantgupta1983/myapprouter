import React, { Component } from 'react'

export default class ClassCounterOne extends Component {

    constructor(props){
        super(props)

        this.state={
            counter : 0
        }
    }

    componentDidMount() {
        document.title = `Counter value - ${this.state.counter}`
    }
    componentDidUpdate(){
        document.title = `Counter value - ${this.state.counter}`

    }
    render() {
        return (
            <div>
                <button onClick={()=>this.setState(
                    {
                        counter: this.state.counter + 1
                    }
                )}>Click Me</button>
            </div>
        )
    }
}
