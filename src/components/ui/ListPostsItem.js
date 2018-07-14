import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    render() {
        const { post, match, openPost } = this.props

        let activePost = post.id === parseInt(match.params.id),
            classListItem = classNames('post-title', { activePost })

        return(
            <li className={ classListItem } 
                onClick={ () => openPost(post.id) }
            >
            {
                activePost ? <ion-icon name="videocam"></ion-icon> : null //return-right
            }
            <span className='post-title-text'>{ post.title }</span>
            </li>
        )
    }
}