import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    handleSelectItem = (id) => {
        const { openPost, hideSideBar } = this.props
        
        openPost(id)
        if (hideSideBar) hideSideBar()
    }

    render() {
        const { post, match } = this.props

        let activePost = post.id === parseInt(match.params.id),
            classListItem = classNames('listItem', { activePost })

        return(
            <div className={ classListItem } 
                onClick={ () => this.handleSelectItem(post.id) }
            >
            {
                activePost ? <ion-icon name="videocam"></ion-icon> : null
            }
            <span className='post-title-text'>{ post.title }</span>
            </div>
        )
    }
}