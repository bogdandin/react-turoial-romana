import React, { Component } from 'react'
import './App.css'

class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            task: "dumy text",
            tasks: []
        }

    }

        changeTxt (e) {

             this.setState ({
                 task: e.target.value
             })
        }

    addTask (){
        let tasks = this.state.tasks
        tasks.push(this.state.task)
        this.setState({
            tasks
        })
    }

    listTasks() {
        let tasks = this.state.tasks
        return (
                <ul>
                    {

                      tasks.map((val,index) => {
                        return (
                            <li key={index}>
                                { val }
                            </li>
                        )

                      })
                    }
                </ul>
        )

    }


    render () {
        return (
            <div className="App" id="App">



                <input  type="text" onChange={(e)  => this.changeTxt(e)}/>

               <button onClick={() => this.addTask()}>
                  Add task

               </button>

               {this.listTasks()}



            </div>
        )

    }

}

export default App