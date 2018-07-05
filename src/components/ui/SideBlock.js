import { Component } from 'react'
import ListPosts from './ListPosts'

export default class SideBlock extends Component {

    render() {
        const { posts, match, openPost } = this.props

        return(
            <div className='SideBlock'>
                <ListPosts 
                    posts={ posts }
                    match={ match } 
                    openPost={ openPost } 
                /> 
            </div>
        )
    }
}