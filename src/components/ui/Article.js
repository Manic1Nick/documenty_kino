import React, { Component } from 'react'
import classNames from 'classnames'
import ArticleSwiped from './ArticleSwiped'

export default class Article extends Component {

    constructor() {
        super()
        this.state = { animateIn: false }
    }

    componentDidMount() {
		this.activeAnimateIn()
    }
    
    componentDidUpdate = (prevProps) => {
        if (prevProps.post !== this.props.post) {
            window.scrollTo(0, 0)

            console.log(window.scrollTo)
            this.activeAnimateIn()
        }
    }

    activeAnimateIn() {
        this.setState({ animateIn: true })
        
		setTimeout(() => {
			this.setState({ animateIn: false })
		}, 1000)
    }

    render() {
        const { animateIn } = this.state
        
        let classAnimateIn = classNames({ 'animationIn': animateIn })

        return(
            <div className={`Article ${ classAnimateIn }`}>
                <ArticleSwiped {...this.props} />
            </div>
        )
    }
}