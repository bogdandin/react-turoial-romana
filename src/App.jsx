import React, { Component } from 'react'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            msg: "This is my first component"
            txt: "This is my dumy text"
        }
    }



    render () {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <p>{this.state.txt}</p>


            </div>
        )

    }

}

export default App