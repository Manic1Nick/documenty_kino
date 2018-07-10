import React, { Component } from 'react'

import Article from './Article'

export default class Articles extends Component {

    handleChangePage = (indexPost) => {
        const { posts, match, openPost } = this.props

        let post = posts[indexPost]
        if (post) openPost(post.id, match.params.tag)
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
        const { posts, activePostIndex } = this.props,
            activePost = posts[activePostIndex]

        if (!activePost) return null

        return(
            <div className='Articles'>
                <div className='arrow-buttons' onClick={ this.handleOpenPrev }>
                    <ion-icon name="ios-arrow-back"></ion-icon>
                </div>

                <Article 
                    post={ activePost } 
                    onPrev={ this.handleOpenPrev } 
                    onNext={ this.handleOpenNext } 
                />
                
                <div className='arrow-buttons' onClick={ this.handleOpenNext }>
                    <ion-icon name="ios-arrow-forward"></ion-icon>
                </div>
            </div>
        )
    }
}