import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import ScrollUpButton from 'react-scroll-up-button'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'

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
        this._loadData()

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
           posts: this.state.posts,
           screenWidth: this.state.width,
           activeTag: this.state.activeTag,
           changeActiveTag: this.onChangeActiveTag
        }
    }

    render() {

        if (this.state.posts.length === 0) return null

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

    _loadData = () => {
        axios
        .get(this.props.link)
        .then(res => { 
            let data = res.data.posts,
                post = {},
                posts = []

            console.log(data)

            data.forEach(dataPost => {
                post = this._parsePost(dataPost)
                posts.push(post)
            })

            console.log(posts)

            this.setState({ posts }) 
        })
        .catch(error => alert(error))
    }

    _parsePost = (data) => {
        let post = {}

        post.id = data.ID
        post.date = data.date.substring(0, 10)
        post.tag = Object.keys(data.categories)[0]
        post.title = data.title
        post.image = data.featured_image
        post.quote = data.excerpt
        post.text = data.content

        return post
    }
}

const ScrollUp = () => <ScrollUpButton style={{ width: 40, height: 40, bottom: 50 }} />

App.childContextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number,
    activeTag: PropTypes.string,
    changeActiveTag: PropTypes.func
}