import React, { Component } from 'react'

import ListPreviews from './ListPreviews'
import ArrowButton from './ArrowButton'

import { LIST_PREVIEWS_SIZE as SIZE} from '../../constants'

export default class Previews extends Component {

    constructor() {
        super()
        this.state = {
            indexBegin: 0,
            indexEnd: SIZE
        }
    }

    // componentDidMount = () => {
    //     this.setState({
    //         postsOnScreen: this.props.posts.slice(0, LIST_PREVIEWS_SIZE)
    //     })
    // }

    // shouldComponentUpdate = (nextProps) => {
    //     return nextProps.posts !== this.props.posts
    // }

    handleOpenPrev = () => {
        let { indexBegin, indexEnd } = this.state

        indexBegin = (indexBegin - SIZE > 0) ? indexBegin - SIZE : 0
        if (indexEnd - SIZE > 0) indexEnd - SIZE

        this.setState({ indexBegin, indexEnd })
    }

    handleOpenNext = () => {
        let { indexBegin, indexEnd } = this.state,
            lastIndex = this.props.posts.length - 1

        if (indexBegin + SIZE < lastIndex) indexBegin += SIZE
        indexEnd = (indexEnd + SIZE > lastIndex) ? lastIndex : indexEnd + SIZE

        this.setState({ indexBegin, indexEnd })
    }

    render() {
        const { indexBegin, indexEnd } = this.state,
            postsOnScreen = this.props.posts.slice(indexBegin, indexEnd)

        return(
            <div className='Previews'>
                <div className='blog-nav'>
                    <ArrowButton name='back' action={ this.handleOpenPrev } />
                </div>

                <ListPreviews
                    { ...this.props }
                    postsOnScreen={ postsOnScreen }
                    onPrev={ this.handleOpenPrev } //for mobile scrolling
                    onNext={ this.handleOpenNext } //for mobile scrolling
                />
                
                <div className='blog-nav'>
                    <ArrowButton name='forward' action={ this.handleOpenNext } />
                </div>
            </div>
        )
    }
}