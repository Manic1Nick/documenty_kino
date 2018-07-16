import React, { Component } from 'react'
import classNames from 'classnames'
import ArticleContent from './ArticleContent'
import ArticleSwiped from './ArticleSwiped'

export default class Article extends Component {

    constructor() {
        super()
        this.state = { animationIn: false }
    }

    componentDidMount() {
		this.activeAnimationIn()
    }
    
    componentDidUpdate = (prevProps) => {
        if (prevProps.post !== this.props.post) {
            window.scrollTo(0, 0)
            this.activeAnimationIn()
        }
    }

    activeAnimationIn() {
        this.setState({ animationIn: true })
        
		setTimeout(() => {
			this.setState({ animationIn: false })
		}, 1000)
    }

    render() {
        const { animationIn } = this.state,
            { shifted } = this.props
        
        let classArticle = classNames('Article', { fadeIn: animationIn })

        return(
            <div className={ classArticle }>
            {
                shifted
            ?
                <ArticleContent {...this.props} />
            :
                <ArticleSwiped {...this.props} />
            }                
            </div>
        )
    }
}