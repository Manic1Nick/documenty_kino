import React, { Component } from 'react'
import classNames from 'classnames'

import ArticleContainer from './ArticleContainer'
import SocialShareButtons from './SocialShareButtons'

export default class Articles extends Component {

    // handleChangePage = (indexPost) => {
    //     const { posts, match, openPost } = this.props

    //     let post = posts[indexPost]
    //     if (post) openPost(post.id, match.params.tag)
    // }

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
            || nextProps.activePostIndex !== this.props.activePostIndex
            || nextProps.shifted !== this.props.shifted
    }

    handleOpenPrev = () => {
        const { posts, activePostIndex, openPost } = this.props,
            changedId = activePostIndex > 0
                ? posts[activePostIndex - 1].id
                : posts[posts.length - 1].id

        openPost(changedId)
    }

    handleOpenNext = () => {
        const { posts, activePostIndex, openPost } = this.props,            
            changedId = activePostIndex < posts.length - 1
                ? posts[activePostIndex + 1].id
                : posts[0].id

        openPost(changedId)
    }

    render() {
        const { posts, activePostIndex, shifted, openSideBar } = this.props,
            activePost = posts[activePostIndex]

        if (!activePost) return null

        let classArticles = classNames('Articles', { shifted })

        return(
            <div className={ classArticles }>
                <div className='article-side'>
                    <SocialShareButtons post={ activePost } />

                    <div className='arrow-buttons'>
                        <ion-icon name="ios-arrow-back" onClick={ this.handleOpenPrev }></ion-icon>
                    </div>
                </div>

                <ArticleContainer
                    post={ activePost } 
                    onPrev={ this.handleOpenPrev } 
                    onNext={ this.handleOpenNext } 
                    openSideBar={ openSideBar }
                    shifted={ shifted }
                />
                
                <div className='article-side'>
                    <div className='arrow-buttons'>
                        <ion-icon name="ios-arrow-forward" onClick={ this.handleOpenNext }></ion-icon>
                    </div>
                </div>
            </div>
        )
    }
}