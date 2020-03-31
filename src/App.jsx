import React, { Component } from 'react'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            msg: "This is my first component"
        }
    }



    render () {
        return (
            <div>
                <h1>{this.state.msg}</h1>


            </div>
        )

    }

}

export default App