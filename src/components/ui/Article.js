import React, { Component } from 'react'
import classNames from 'classnames'
import Swipe from 'react-easy-swipe'

import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    ViberShareButton,
    EmailShareButton,
  } from 'react-share'

import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
  } from 'react-share'

  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    EmailIcon,
    ViberIcon,
  } from 'react-share'

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
    
    // onSwipeStart(event) {
    //     console.log('Start swiping...', event);
    // }
     
    onSwipeMove(position, event) {
        const { onPrev, onNext } = this.props

        if (position.x < -50) onPrev()
        else if (position.x > 50) onNext()

        // console.log(`Moved ${position.x} pixels horizontally`, event);
        // console.log(`Moved ${position.y} pixels vertically`, event);
    }
     
    // onSwipeEnd(event) {
    //     console.log('End swiping...', event);
    // }

    render() {
        const { post } = this.props,
            { animateIn } = this.state

        const postText = post.text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        let classAnimateIn = classNames({ 'animationIn': animateIn })

        return(
            <div className='Article'>
                <Swipe
                    onSwipeMove={ this.onSwipeMove.bind(this) }
                    //onSwipeStart={ this.onSwipeStart }
                    //onSwipeEnd={ this.onSwipeEnd }
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

                            <div className='article-social-shares'>
                                <FacebookShareButton className='social-icon' url={'http://facebook.com'}>
                                    <FacebookIcon size={32} round={true} />
                                </FacebookShareButton>
                                <TwitterShareButton className='social-icon' url={'http://twitter.com'}>
                                    <TwitterIcon size={32} round={true} />
                                </TwitterShareButton>
                                <TelegramShareButton className='social-icon' url={'http://telegram.com'}>
                                    <TelegramIcon size={32} round={true} />
                                </TelegramShareButton>
                            </div>
                            
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