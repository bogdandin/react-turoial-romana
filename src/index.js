import  React from 'react'
import  ReactDOM from 'react-dom'
import App from './App'

const someData = 'thos is data from Parent'

ReactDOM.render(
    <App message={someData} />,
    document.getElementById('root')

)