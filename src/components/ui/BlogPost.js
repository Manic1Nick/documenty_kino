import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class BlogPost extends Component {

    render() {
        const { id } = this.props.match.params,
            openingId = id || 1

        const post = this.context.posts.find(post => post.id == openingId)

        return(
            <div className='BlogPost'>
                <h3 className='post-title'>{ post.title }</h3>
                <img className='post-image' src={`${post.image}`} />
                <p className='post-text'>{ post.text }</p>
                <p className='post-date'>{ post.date }</p>
            </div>
        )
    }
}

BlogPost.contextTypes = {
    posts: PropTypes.array
}