import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import ScrollUpButton from 'react-scroll-up-button'

import HeadBlock from './ui/HeadBlock'
import Blog from './ui/Blog'
import FooterBlock from './ui/FooterBlock'

import '../assets/styles/style.scss'
import '../assets/styles/queries.scss'

export default class App extends Component {

    constructor() {
        super()
        this.state = { width: 0, height: 0 }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
    
    getChildContext() {
        return {
           posts: this.props.state.articles,
           screenWidth: this.state.width
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
                <ScrollUp />
            </div>    
        )
    }
}

const ScrollUp = () => <ScrollUpButton style={{ width: 40, height: 40, bottom: 50 }} />

App.childContextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number
}