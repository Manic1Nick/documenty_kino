import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class BlogPost extends Component {

    render() {
        const { id, tag } = this.props.match.params,
            { posts } = this.context

        let post = id 
            ? posts.find(post => post.id == id) 
            : posts.filter(post => post.tag == tag)[0]
        
        if (!post) post = posts.find(post => post.id == 1)

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