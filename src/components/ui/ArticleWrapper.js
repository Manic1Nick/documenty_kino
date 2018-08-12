import React, { Component } from 'react'
import classNames from 'classnames'
import Article from './Article'
import ArticleSwiped from './ArticleSwiped'

export default class ArticleContainer extends Component {

    constructor() {
        super()
        this.state = { animate: false }
    }

    componentDidMount() {
		this.activeAnimate()
    }
    
    componentDidUpdate = (prevProps) => {
        if (prevProps.post !== this.props.post) {
            window.scrollTo(0, 0)
            this.activeAnimate()
        }
    }

    activeAnimate() {
        this.setState({ animate: true })
        
		setTimeout(() => {
			this.setState({ animate: false })
		}, 1000)
    }

    render() {
        const { animate } = this.state,
            { shifted } = this.props
        
        let classArticle = classNames('ArticleWrapper', { fadeIn: animate })

        return(
            <div className={ classArticle }>
            {
                shifted
            ?
                <Article {...this.props} />
            :
                <ArticleSwiped {...this.props} />
            }                
            </div>
        )
    }
}