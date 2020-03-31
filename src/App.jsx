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
                <p>Props de la parinte si state din constructor /  Both props and state changes trigger a render update.</p>



            </div>
        )

    }

}

export default App