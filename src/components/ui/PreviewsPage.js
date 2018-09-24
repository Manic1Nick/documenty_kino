import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import PreviewsList from './PreviewsList'
import PreviewsGrid from './PreviewsGrid'
import ArrowButton from './ArrowButton'

import { LIST_PREVIEWS_SIZE as SIZE} from '../../constants'

export default class PreviewsPage extends Component {

    constructor() {
        super()
        this.state = {
            pages: [],
            activePageIndex: 0
        }
    }

    componentWillMount = () => {
        this.updatePages(this.props.posts)
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.posts && nextProps.posts !== this.props.posts
            || nextState.activePageIndex !== this.state.activePageIndex
            || nextProps.screenWidth !== this.props.screenWidth
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.posts !== this.props.posts) {
            this.updatePages(nextProps.posts)
        }
    }

    updatePages = (posts) => {
        let size = this.props.screenWidth > 480 ? SIZE : posts.length,
            pages = this._splitPosts(posts, size)
        
        this.setState({ pages, activePageIndex: 0 })
    }

    updatePage = (activePageIndex) => {
        this.setState({ activePageIndex })
        window.scrollTo(0, 0)
    }

    handleOpenPrev = () => {
        let { activePageIndex } = this.state

        if (activePageIndex > 0) activePageIndex--
        this.updatePage(activePageIndex)
    }

    handleOpenNext = () => {
        let { pages, activePageIndex } = this.state

        if (activePageIndex < pages.length - 1) activePageIndex++
        this.updatePage(activePageIndex)
    }

    render() {
        const { pages, activePageIndex } = this.state

        return(
            <div className='PreviewsPage'>
                <PreviewsGrid 
                    { ...this.props }
                    posts={ pages[activePageIndex] } 
                    onPrev={ this.handleOpenPrev } //for mobile scrolling
                    onNext={ this.handleOpenNext } //for mobile scrolling
                />
            </div>
        )
    }

    _splitPosts = (posts, postsOnPage) => {
        let pages = [], postsCopy = [].concat(posts)

        while (postsCopy.length > 0) 
            pages.push(postsCopy.splice(0, postsOnPage))

        return pages
    }
}