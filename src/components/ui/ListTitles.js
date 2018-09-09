import { Component } from 'react'
import ListTitlesItem from './ListTitlesItem'

export default class ListTitles extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
            || nextProps.match.params.id !== this.props.match.params.id
    }

    render() {
        const { posts } = this.props

        return(
            <ul className='ListTitles'>
            {
                posts.map((post, i) =>
                    <li key={i}>
                        <ListTitlesItem 
                            post={ post } 
                            timeoutMs={ 50*i } 
                            { ...this.props } 
                        />
                    </li>
                )
            }
            </ul>
        )
    }
}