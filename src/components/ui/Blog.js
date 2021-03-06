import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import SideBlock from './SideBlock'
import SideBar from './SideBar'
import Articles from './Articles'

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

    componentWillReceiveProps = (nextProps) => { 
        const { tag } = nextProps.match.params

        if (tag !== this.props.match.params.tag) {
            this._updatePosts(tag)
        } 
    }

    handleOpenPost = (id, tag) => {
        const { listPosts } = this.state,
            { match, history } = this.props

        if (!tag) tag = match.params.tag || 'all'
        //if (!id) id = listPosts[listPosts.length - 1].id
        if (!id) id = listPosts[0].id

        history.push(`/${tag}/${id}`)
    }

    handleOpenSideBar = () => {
        this.setState({ openSideBar: true })
    }

    handleHideSideBar = () => {
        this.setState({ openSideBar: false })
    }

    render() {
        const { listPosts, openSideBar } = this.state,
            { id } = this.props.match.params,
            activePostIndex = listPosts.findIndex(post => post.id === parseInt(id))

        return(
            <div className='Blog'>
                <Articles
                    shifted={ openSideBar }
                    posts={ listPosts }
                    activePostIndex={ activePostIndex }
                    openPost={ this.handleOpenPost } 
                    openSideBar={ this.handleOpenSideBar }
                />
                <SideBlock 
                    posts={ listPosts } 
                    match={ this.props.match } 
                    openPost={ this.handleOpenPost }
                />
                <SideBar 
                    open={ openSideBar }
                    posts={ listPosts } 
                    match={ this.props.match } 
                    openPost={ this.handleOpenPost }
                    hideSideBar={ this.handleHideSideBar }
                />
            </div>
        )
    }

    _updatePosts = (tag) => {

        let listPosts = (tag && tag !== 'all')
            ? this.context.posts.filter(post => post.tag === tag) 
            : this.context.posts

        this.setState({ listPosts })
    }
}

Blog.contextTypes = {
    posts: PropTypes.array
}