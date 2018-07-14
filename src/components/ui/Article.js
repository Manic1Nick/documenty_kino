import React, { Component } from 'react'
import classNames from 'classnames'
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
        const { animationIn } = this.state
        
        let classAnimationIn = classNames('Article', { animationIn })

        return(
            <div className={ classAnimationIn }>
                <ArticleSwiped {...this.props} />
            </div>
        )
    }
}