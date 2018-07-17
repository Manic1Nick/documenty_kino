import { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'
import ListPostsItem from './ListPostsItem'

const Item = posed.li()

export default class ListPosts extends Component {

    render() {
        const { posts, match, openPost } = this.props

        return(
            <ul className='ListPosts'>
                <PoseGroup>
                {
                    posts.map(post =>
                        <Item key={post.id}>
                            <ListPostsItem  
                                post={ post } 
                                match={ match } 
                                openPost={ openPost } 
                            />
                        </Item>
                    )
                }
                </PoseGroup>
            </ul>
        )
    }
}