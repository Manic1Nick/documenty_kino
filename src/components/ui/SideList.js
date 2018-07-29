import { Component } from 'react'
import ListPosts from './ListPosts'

export default class SideList extends Component {

    render() {
        return(
            <div className='SideList'>
                <ListPosts { ...this.props } /> 
            </div>
        )
    }
}