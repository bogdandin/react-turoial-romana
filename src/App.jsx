import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            txt: "dumy text"
        }
    }

        changeTxt (e) {
            console.log(e.target.value)
             this.setState ({
                 txt: e.target.value
             })
        }






    render () {
        return (
            <div className="App" id="App">

                <h1>{this.state.txt}</h1>

                <input type="text" onChange={(e)  => this.changeTxt(e)}/>

               <button onClick={() => this.changeTxt()}>
                   Change text

               </button>



            </div>
        )

    }

}

export default App