import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import HeadBlock from './ui/HeadBlock'
import Blog from './ui/Blog'
import FooterBlock from './ui/FooterBlock'

import '../assets/styles/style.scss'

export default class App extends Component {
    
    getChildContext() {
        return {
           posts: this.props.state.articles
        }
    }

    render() {
        return(
            <div className="App">
                <HeadBlock />
                <Switch>
                    <Route exact path="/" component={Blog} />
                    <Route exact path='/:tag' component={Blog} />
                    <Route exact path='/:tag/:id' component={Blog} /> 
                </Switch>
                <FooterBlock />
            </div>    
        )
    }
}

App.childContextTypes = {
    posts: PropTypes.array
}