import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router} from 'react-router-dom'

import App from './components/App'


let link = "https://public-api.wordpress.com/rest/v1/sites/docs772827771.wordpress.com/posts"

window.React = React

render(
	<Router>
		<App link={ link } />
	</Router>,
  	document.getElementById('react-container')
)