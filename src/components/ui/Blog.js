import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import ArticlePage from './ArticlePage'
import PreviewsPage from './PreviewsPage'
import SideBlock from './SideBlock'

export default class Blog extends Component {

    constructor() {
        super() 
        this.state = { 
            listPosts: [],
            openSideBar: false
        }
    }

    componentWillMount = () => {
        this._updatePosts()
    }
    
    componentDidMount = () => {
        this.handleOpenPost()
    }    

    shouldComponentUpdate = (nextProps, nextState, nextContext) => {
        return nextProps.match !== this.props.match
            || nextContext.screenWidth !== this.context.screenWidth
    }

    componentWillReceiveProps = (nextProps) => { 
        const { tag } = nextProps.match.params,
            { changeActiveTag } = this.context

        if (tag !== this.props.match.params.tag) {
            this._updatePosts(tag)
            changeActiveTag(tag)
            
            window.scrollTo(0, 0)
        } 
    }

    handleOpenPost = (id, tag) => {
        const { match, history } = this.props

        if (!tag) tag = match.params.tag || 'all'
        // if (!id) id = listPosts[listPosts.length - 1].id

        if (id) history.push(`/${tag}/${id}`)
        else history.push(`/${tag}`)
        
        window.scrollTo(0, 0)
    }

    handleOpenSideBar = () => {
        this.setState({ openSideBar: true })
    }

    handleHideSideBar = () => {
        this.setState({ openSideBar: false })
    }

    render() {
        const { listPosts, openSideBar } = this.state,
            { match } = this.props,
            activePostIndex = listPosts.findIndex(post => post.id === parseInt(match.params.id)),
            dataProps = {
                posts: listPosts,
                match,
                screenWidth: this.context.screenWidth,
                openPost: this.handleOpenPost
            }

        return(
            <div className='Blog'>
                {
                    match.params.id
                ?
                    <ArticlePage {...dataProps} 
                        shifted={ openSideBar }
                        activePostIndex={ activePostIndex }
                        openSideBar={ this.handleOpenSideBar }
                        hideSideBar={ this.handleHideSideBar }
                    />
                :
                    <PreviewsPage {...dataProps} />
                }
                <SideBlock {...dataProps}
                    isSideBarOpening={ openSideBar }
                    hideSideBar={ this.handleHideSideBar }
                />
            </div>
        )
    }

    _updatePosts = (tag) => {
        const { posts } = this.context

        let listPosts = (tag && tag !== 'all')
            ? posts.filter(post => post.tag === tag) 
            : posts

        this.setState({ listPosts })
    }
}

Blog.contextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number,
    changeActiveTag: PropTypes.func
}