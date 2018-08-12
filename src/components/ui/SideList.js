import { Component } from 'react'
import ListTitles from './ListTitles'
import Quotes from './Quotes'

export default class SideList extends Component {

    renderListTitles = () => {
        return (this.props.isPreviewsOpen) 
            ? null 
            : <ListTitles { ...this.props } />
    }

    render() {
        return(
            <div className='SideList'>
                <Quotes { ...this.props } />
                { 
                    this.renderListTitles() 
                }
            </div>
        )
    }
}