import { Component } from 'react'
import classNames from 'classnames'

export default class ListPosts extends Component {

    render() {
        const { posts, match, openPost } = this.props

        return(
            <div className='ListPosts'>
            {
                posts.map((post, i) => {
                    let activeTitle = post.id === parseInt(match.params.id),
                        classListItem = classNames('post-title', { activeTitle }),
                        postTitle = activeTitle 
                            ? <span><ion-icon name="return-right"></ion-icon>{post.title}</span> 
                            : <span>{post.title}</span>

                    return(
                        <p key={i} 
                            className={ classListItem } 
                            onClick={ () => openPost(post.id) }
                        >{ postTitle }</p>
                    )
                })
            }
            </div>
        )
    }
}