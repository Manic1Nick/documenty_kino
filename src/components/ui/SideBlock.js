import { Component } from 'react'
import ListPosts from './ListPosts'

export default class SideBlock extends Component {

    render() {
        return(
            <div className='SideBlock'>
                <ListPosts { ...this.props } /> 
            </div>
        )
    }
}