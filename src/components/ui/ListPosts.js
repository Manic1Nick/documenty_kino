import { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class ListPosts extends Component {

    handleSelectPost = ({ id, tag }) => {
        this.props.onSelect(id, tag)
    }

    render() {
        const { tag } = this.props.match.params

        const listPosts = tag 
            ? this.context.posts.filter(post => post.tag == tag)
            : this.context.posts

        return(
            <div className='ListPosts'>
            {
                listPosts.map((post, i) => {
                    return(
                        <p key={i} onClick={ () => this.handleSelectPost(post) } >{`${post.title}`}</p>
                    )
                })
            }
            </div>
        )
    }
}

ListPosts.contextTypes = {
    posts: PropTypes.array
}