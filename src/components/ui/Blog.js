import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import SideBlock from './SideBlock'
import Articles from './Articles'

export default class Blog extends Component {

    constructor(props) {
        super() 
        this.state = { listPosts: [] }
    }

    componentWillMount = () => {
        this._updatePosts()
    }
    
    componentDidMount = () => {
        this.handleOpenPost()
    }

    componentWillReceiveProps = (nextProps) => { 
        const { id, tag } = nextProps.match.params

        if (tag !== this.props.match.params.tag) {
            this._updatePosts(tag)
        } 
    }

    handleOpenPost = (id, tag) => {
        const { listPosts } = this.state,
            { match, history } = this.props

        if (!tag) tag = match.params.tag || 'all'
        if (!id) id = listPosts[listPosts.length - 1].id

        history.push(`/${tag}/${id}`)
    }

    render() {
        const { listPosts } = this.state,
            { id } = this.props.match.params,
            activePostIndex = listPosts.findIndex(post => post.id === parseInt(id))

        return(
            <div className='Blog'>
                <Articles
                    posts={ listPosts }
                    activePostIndex={ activePostIndex }
                    openPost={ this.handleOpenPost } 
                />
                <SideBlock 
                    posts={ listPosts } 
                    match={ this.props.match } 
                    openPost={ this.handleOpenPost } 
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