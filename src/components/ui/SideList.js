import { Component } from 'react'
import ListTitles from './ListTitles'
import Quotes from './Quotes'

export default class SideList extends Component {

    renderListTitles = () => {
        if (this.props.isPreviewsOpen) return null

        return <ListTitles { ...this.props } />
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