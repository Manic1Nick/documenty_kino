import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import SideBlock from './SideBlock'
import BlogPost from './BlogPost'

export default class Blog extends Component {

    handleOpenPost = (id, tag) => {
        const { history, match } = this.props

        if (match.params.id) history.push(`${id}`)
        else history.push(`${tag}/${id}`)
    }

    render() {
        //const { id, tag } = this.props.match.params

        // const openingId = id || 1,
        //     openingPost = this.context.posts.filter(post => post.id === openingId)

        // const sideList = tag 
        //     ? this.context.posts.filter(post => post.tag === tag) 
        //     : this.context.posts

        return(
            <div className='Blog'>
                <BlogPost match={ this.props.match } />
                <SideBlock match={ this.props.match } onOpenPost={ this.handleOpenPost } />
            </div>
        )
    }
}

Blog.contextTypes = {
    posts: PropTypes.array
}