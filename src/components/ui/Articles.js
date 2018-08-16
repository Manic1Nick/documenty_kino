import React, { Component } from 'react'
import classNames from 'classnames'

import ArticleWrapper from './ArticleWrapper'
import SocialShareButtons from './SocialShareButtons'
import ArrowButton from './ArrowButton'

export default class Articles extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
            || nextProps.activePostIndex !== this.props.activePostIndex
            || nextProps.shifted !== this.props.shifted
    }

    handleOpenPrev = () => {
        // const { posts, activePostIndex, openPost } = this.props,
        //     changedId = activePostIndex > 0
        //         ? posts[activePostIndex - 1].id
        //         : posts[posts.length - 1].id

        // openPost(changedId)

        const { posts, activePostIndex, openPost } = this.props,
            prevPost = posts[activePostIndex - 1]
        
        if (prevPost) openPost(prevPost.id)
    }

    handleOpenNext = () => {
        // const { posts, activePostIndex, openPost } = this.props,            
        //     changedId = activePostIndex < posts.length - 1
        //         ? posts[activePostIndex + 1].id
        //         : posts[0].id

        // openPost(changedId)

        const { posts, activePostIndex, openPost } = this.props,
            nextPost = posts[activePostIndex + 1]
        
        if (nextPost) openPost(nextPost.id)
    }

    render() {
        const { posts, activePostIndex, shifted, openSideBar } = this.props,
            activePost = posts[activePostIndex],
            prevPost = posts[activePostIndex - 1],
            nextPost = posts[activePostIndex + 1]

        if (!activePost) return null

        let classArticles = classNames('Articles', { shifted })

        return(
            <div className={ classArticles }>
                <div className='blog-nav'>                
                    <SocialShareButtons post={ activePost } />

                    <ArrowButton 
                        name='back' 
                        action={ this.handleOpenPrev } 
                        title={ prevPost ? `Попереднiй: ${prevPost.title}` : null }
                        hidden={ !prevPost }
                    />
                </div>

                <ArticleWrapper
                    post={ activePost } 
                    openSideBar={ openSideBar }
                    shifted={ shifted }
                    onPrev={ this.handleOpenPrev } //for mobile scrolling
                    onNext={ this.handleOpenNext } //for mobile scrolling
                />
                
                <div className='blog-nav'>
                    <ArrowButton 
                        name='forward' 
                        action={ this.handleOpenNext } 
                        title={ nextPost ? `Наступний: ${nextPost.title}` : null }
                        hidden={ !nextPost }
                    />
                </div>
            </div>
        )
    }
}