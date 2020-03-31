import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            txt: "dumy text"
        }
    }

        changeTxt () {
             this.setState ({
                 txt: 'this is new text '
             })

            }






    render () {
        return (
            <div className="App" id="App">

                <h1>{this.state.txt}</h1>
                <h1>{this.props.message}</h1>
               <button onClick={() => this.changeTxt()}>
                   Change text

               </button>



            </div>
        )

    }

}

export default App