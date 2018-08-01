import { Component } from 'react'
import ListPostsItem from './ListPostsItem'

export default class ListPosts extends Component {

    // shouldComponentUpdate = (nextProps) => {
    //     return nextProps.posts !== this.props.posts
    //         || nextProps.match.params.id !== this.props.match.params.id
    // }

    render() {
        const { posts } = this.props

        return(
            <ul className='ListPosts'>
            {
                posts.map((post, i) =>
                    <ListPostsItem 
                        key={i} 
                        postIndex={i}
                        { ...this.props } 
                    />                        
                )
            }
            </ul>
        )
    }
}