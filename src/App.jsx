import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            txt: "dumy text"
        }
        this.styles = {

            input:{
                border:'1px solid red'
            }
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

                <input style={this.styles.input} type="text" onChange={(e)  => this.changeTxt(e)}/>

               <button onClick={() => this.changeTxt()}>
                  Add task

               </button>



            </div>
        )

    }

}

export default App