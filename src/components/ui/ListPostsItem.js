import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    render() {
        const { post, match, openPost } = this.props

        let activeTitle = post.id === parseInt(match.params.id),
            classListItem = classNames('post-title', { activeTitle })

        return(
            <li className={ classListItem } 
                onClick={ () => openPost(post.id) }
            >
            {
                activeTitle ? <ion-icon name="videocam"></ion-icon> : null //return-right
            }
            <span className='post-title-text'>{ post.title }</span>
            </li>
        )
    }
}