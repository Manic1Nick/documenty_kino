import { Component } from 'react'

import ListPostsItem from './ListPostsItem'

export default class ListPosts extends Component {

    render() {
        const { posts, match, openPost } = this.props

        return(
            <ul className='ListPosts'>
            {
                posts.map((post, i) =>
                    <ListPostsItem key={i} 
                        post={ post } 
                        match={ match } 
                        openPost={ openPost } 
                        timeout={ 80 * i+1 }
                    />
                )
            }
            </ul>
        )
    }
}