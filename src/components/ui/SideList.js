import { Component } from 'react'
import ListPosts from './ListPosts'
import Quotes from './Quotes'

export default class SideList extends Component {

    render() {
        return(
            <div className='SideList'>
                <Quotes { ...this.props } />
                <ListPosts { ...this.props } /> 
            </div>
        )
    }
}