import React, { Component } from 'react'
import classNames from 'classnames'

import ArticleContainer from './ArticleContainer'

export default class Articles extends Component {

    constructor() {
        super()
        this.state = {
            posts: [],
            activePost: {},
            prevPost: {},
            nextPost: {}
        }
    }

    componentWillMount = () => {
        this._updateState(this.props)
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.activePostIndex !== this.props.activePostIndex
            || nextProps.posts !== this.props.posts) {

            this._updateState(nextProps)
        }
    }

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
            || nextProps.match.url !== this.props.match.url
            || nextProps.shifted !== this.props.shifted
    }

    handleOpenPrev = () => {
        this.props.openPost(this.state.prevPost.id)
    }

    handleOpenNext = () => {
        this.props.openPost(this.state.nextPost.id)
    }

    tooltip = (title) => <span className='tooltip'>{title}</span>

    render() {
        const { activePost, prevPost, nextPost, posts } = this.state,
            { shifted, openPost, match, openSideBar } = this.props

        if (!activePost) return null

        let classArticles = classNames('Articles', { shifted })

        return (
            <div className={ classArticles }>
                <div className='arrow-buttons' onClick={this.handleOpenPrev}>
                    <ion-icon name="ios-arrow-back"></ion-icon>
                    { 
                        this.tooltip(prevPost ? prevPost.title : '') 
                    }
                </div>

                <ArticleContainer
                    post={ activePost } 
                    posts={ posts }
                    openPost={ openPost } 
                    match={ match } 
                    shifted={ shifted }
                    openSideBar={ openSideBar }
                    onPrev={ this.handleOpenPrev } 
                    onNext={ this.handleOpenNext } 
                />

                <div className='arrow-buttons' onClick={this.handleOpenNext}>
                    <ion-icon name="ios-arrow-forward"></ion-icon>
                    {
                        this.tooltip(nextPost ? nextPost.title : '')
                    }
                </div>
            </div>
        )
    }

    _updateState = ({ activePostIndex, posts }) => {
        this.setState({
            posts,
            activePost: posts[activePostIndex],
            prevPost: this._getPrevPost({ activePostIndex, posts }),
            nextPost: this._getNextPost({ activePostIndex, posts })
        })
    }

    _getNextPost = (props) => {
        const { posts, activePostIndex } = props || this.props,
            nextPost = activePostIndex < posts.length - 1
                ? posts[activePostIndex + 1]
                : posts[0]

        return nextPost
    }

    _getPrevPost = (props) => {
        const { posts, activePostIndex } = props || this.props,
            prevPost = activePostIndex > 0
                ? posts[activePostIndex - 1]
                : posts[posts.length - 1]

        return prevPost
    }
}