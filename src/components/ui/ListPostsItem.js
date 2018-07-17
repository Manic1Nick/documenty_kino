import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    render() {
        const { post, match, openPost } = this.props

        let activePost = post.id === parseInt(match.params.id),
            classListItem = classNames('listItem', { activePost })

        return(
            <div className={ classListItem } 
                onClick={ () => openPost(post.id) }
            >
            {
                activePost ? <ion-icon name="videocam"></ion-icon> : null
            }
            <span className='post-title-text'>{ post.title }</span>
            </div>
        )
    }
}