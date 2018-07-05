import React from 'react'
import { render } from 'react-dom'
import sampleData from './initialState'
import App from './components/App'
import { HashRouter as Router} from 'react-router-dom'

const state = (localStorage["redux-store-documenty"]) ?
    JSON.parse(localStorage["redux-store-documenty"]) :
    sampleData

// const saveState = () => 
//     localStorage["redux-store-posts"] = JSON.stringify(store.getState())

window.React = React

render(
	<Router>
		<App state={ state } />
	</Router>,
  	document.getElementById('react-container')
)