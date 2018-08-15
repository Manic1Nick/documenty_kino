import { Component } from 'react'
import ListPreviewsItem from './ListPreviewsItem'

export default class ListPreviews extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.postsOnScreen !== this.props.postsOnScreen
    }

    render() {
        const { postsOnScreen } = this.props

        return(
            <div className='ListPreviews'>
            {
                postsOnScreen.map((post, i) =>
                    <ListPreviewsItem 
                        key={i} 
                        post={ post } 
                        timeoutMs={ 100*i } 
                        { ...this.props } 
                    />
                )
            }
            </div>
        )
    }
}