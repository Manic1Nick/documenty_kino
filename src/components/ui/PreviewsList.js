import { Component } from 'react'
import PreviewsItem from './PreviewsItem'

export default class PreviewsList extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.postsOnScreen !== this.props.postsOnScreen
    }

    render() {
        const { postsOnScreen } = this.props

        if (!postsOnScreen) return null

        return(
            <div className='ListPreviews'>
            {
                postsOnScreen.map((post, i) =>
                    <PreviewsItem 
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