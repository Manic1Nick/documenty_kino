import { Component } from 'react'
import PreviewsItem from './PreviewsItem'

export default class PreviewsList extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
    }

    render() {
        const { posts } = this.props

        if (!posts) return null

        return(
            <div className='PreviewsList'>
            {
                posts.map((post, i) =>
                    <PreviewsItem 
                        key={i} 
                        post={ post }
                        { ...this.props } 
                    />
                )
            }
            </div>
        )
    }
}