// import Test from './Test.react';
// import ReactDOM from 'react-dom'

// ReactDOM.render(document.getElementById('app'), 
// React.createElement(Test) // so that rollup includes it in bundle
// )


import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(React.createElement(App), document.getElementById('root'))