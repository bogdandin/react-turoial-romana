import React, { Component } from 'react'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            txt: "dumy text"
        }
    }



    render () {
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <h1>{this.props.message}</h1>



            </div>
        )

    }

}

export default App