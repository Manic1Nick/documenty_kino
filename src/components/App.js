import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import ScrollUpButton from 'react-scroll-up-button'
import axios from 'axios'

import HeadBlock from './ui/HeadBlock'
import Blog from './ui/Blog'
import FooterBlock from './ui/FooterBlock'

import '../assets/styles/style.scss'
import '../assets/styles/queries.scss'

export default class App extends Component {

    constructor() {
        super()
        this.state = { 
            posts: [],
            width: 0, 
            height: 0,
            activeTag: ''
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        axios
      .get(
        "http://public-api.wordpress.com/rest/v1/sites/docs772827771.wordpress.com/posts"
      )
      .then(res => {
        this.setState({ posts: res.data.posts });
        console.log(this.state.posts);
      })
      .catch(error => console.log(error));

        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
      
    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight 
        })
    }

    onChangeActiveTag = (activeTag) => {
        this.setState({ activeTag })
    }
    
    getChildContext() {
        return {
        //    posts: this.props.state.articles,
            posts: this.state.posts,
           screenWidth: this.state.width,
           activeTag: this.state.activeTag,
           changeActiveTag: this.onChangeActiveTag
        }
    }

    render() {

        const styleBeta = {
            'width': '100%',
            'background': 'red',
            'textAlign': 'center',
            'color': 'white',
            'fontWeight': 'bold',
            'position': 'fixed',
            'top': '0',
            'zIndex': '10'
        }

        // delete row 252 in style.css after delete beta
        // change row 344 in queries.css after delete beta

        return(
            <div className="App">
                <div style={ styleBeta }>Бета-версiя</div>

                <HeadBlock />
                {/* <Switch>
                    <Route exact path="/" component={Blog} />
                    <Route exact path='/:tag' component={Blog} />
                    <Route exact path='/:tag/:id' component={Blog} /> 
                </Switch> */}
                <FooterBlock />
                <ScrollUp />
            </div>    
        )
    }
}

const ScrollUp = () => <ScrollUpButton style={{ width: 40, height: 40, bottom: 50 }} />

App.childContextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number,
    activeTag: PropTypes.string,
    changeActiveTag: PropTypes.func
}