import { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'

export default class Quotes extends Component {
    
    constructor() {
        super()
        this.state = {
            postsWithQuotes: [],
            activePostIndex: 0,
            animate: false
        }
    }

    componentWillMount = () => {
        let postsWithQuotes = this.context.posts.filter(post => post.quote.length > 0)

        this.setState({
            postsWithQuotes,
            activePostIndex: Math.floor(Math.random() * postsWithQuotes.length)
        })
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.changeActivePostIndex(),
            10000
        )
        this.activeAnimate()
    }

    changeActivePostIndex = () => {
        let activePostIndex = this._getRandomIndex()

        this.setState({ activePostIndex })
        this.activeAnimate()
    }

    activeAnimate() {
        this.setState({ animate: true })
        
		setTimeout(() => {
			this.setState({ animate: false })
		}, 1000)
    }

    handleOpenPost = (id, tag) => {
        this.props.openPost(id, tag)
    }
 
    render() {
        const { postsWithQuotes, activePostIndex, animate } = this.state,
            post = postsWithQuotes[activePostIndex],
            { id, tag, title, quote } = post

        if (!post) return null

        let classQuoteText = classNames('quote-text', { fadeIn: animate })
        
        return(
            <div className='Quotes' onClick={ () => this.handleOpenPost(id, tag) } title={ title }>
                <ion-icon name="quote"></ion-icon>

                <div className={ classQuoteText }>
                    { ReactHtmlParser(quote) }
                </div> 

                <div className='quote-link'>
                    <ion-icon md="md-open"></ion-icon>
                </div>                
            </div>
        )
    }

    _getRandomIndex = () => {
        const { activePostIndex, postsWithQuotes } = this.state

        let getRandom = () => Math.floor(Math.random() * postsWithQuotes.length),
            newActivePostIndex = getRandom()
        
        while (activePostIndex === newActivePostIndex) newActivePostIndex = getRandom()

        return newActivePostIndex
    }
}

Quotes.contextTypes = {
    posts: PropTypes.array
}