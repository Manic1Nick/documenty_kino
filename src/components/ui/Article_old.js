import React, { Component } from 'react'
import classNames from 'classnames'
import Swipe from 'react-easy-swipe'

import SocialShareButtons from './SocialShareButtons'

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
        const { post, onPrev, onNext } = this.props,
            { animateIn } = this.state

        const postText = post.text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        let classAnimateIn = classNames({ 'animationIn': animateIn })

        return(
            <div className='Article'>
                <Swipe
                    onSwipeLeft={ () => onNext() }
                    onSwipeRight={ () => onPrev() }
                >
                    <div className={`article-content ${classAnimateIn}`}>
                        <div className='article-title'>
                            <h3>{ post.title }</h3>
                        </div>
                        <div className='article-image'>
                            <img src={`${post.image}`} />
                        </div>
                        <div className='article-text'>
                            { postText }
                        </div>
                        <div className='article-footer'>

                            <SocialShareButtons post={ post } />

                            <div className='article-date'>
                                { post.date }    
                            </div>           
                        </div>                  
                    </div>
                </Swipe>                
            </div>
        )
    }
}