import React from 'react'
import { render } from 'react-dom'
// import sampleData from './initialState'

//import fetch from 'isomorphic-fetch'
//import sampleData from 'https://sendeyo.com/en/3957c0bb3a'

import App from './components/App'
import { HashRouter as Router} from 'react-router-dom'

// let sampleData = {}

// fetch('https://api.myjson.com/bins/aa1me')
// 	.then(response => response.json())
// 	.then(response => { sampleData = response })
//     .catch(error => {
//         console.log(error.message)
// 	})

// 	console.log(sampleData)

// const state = (localStorage["redux-store-documenty"]) ?
//     JSON.parse(localStorage["redux-store-documenty"]) :
//     sampleData

// const saveState = () => 
//     localStorage["redux-store-posts"] = JSON.stringify(store.getState())


let link = "https://public-api.wordpress.com/rest/v1/sites/docs772827771.wordpress.com/posts"

window.React = React

render(
	<Router>
		<App link={ link } />
	</Router>,
  	document.getElementById('react-container')
)