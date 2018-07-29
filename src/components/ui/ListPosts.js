import { Component } from 'react'
import ListPostsItem from './ListPostsItem'

export default class ListPosts extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
            || nextProps.match.params.id !== this.props.match.params.id
    }

    render() {
        const { posts } = this.props

        return(
            <ul className='ListPosts'>
                {
                    posts.map((post, i) =>
                        <li key={i}>
                            <ListPostsItem post={ post } { ...this.props } timeoutMs={ 50*i } />
                        </li>
                    )
                }
            </ul>
        )
    }
}