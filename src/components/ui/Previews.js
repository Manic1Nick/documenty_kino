import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import ListPreviews from './ListPreviews'
import ArrowButton from './ArrowButton'

import { LIST_PREVIEWS_SIZE as SIZE} from '../../constants'

export default class Previews extends Component {

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
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.posts !== this.props.posts) {
            this.updatePages(nextProps.posts)
        }
    }

    updatePages = (posts) => {
        let size = this.context.screenWidth > 480 ? SIZE : posts.length,
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
        const { pages, activePageIndex } = this.state,
            prevPage = pages[activePageIndex - 1],
            nextPage = pages[activePageIndex + 1]

        return(
            <div className='Previews'>
                <div className='blog-nav'>
                    <ArrowButton 
                        name='back' 
                        action={ this.handleOpenPrev } 
                        title={ prevPage ? `Попереднi ${prevPage.length}` : null }
                        hidden={ !prevPage }
                    />
                </div>

                <ListPreviews
                    { ...this.props }
                    postsOnScreen={ pages[activePageIndex] }
                    onPrev={ this.handleOpenPrev } //for mobile scrolling
                    onNext={ this.handleOpenNext } //for mobile scrolling
                />
                
                <div className='blog-nav'>
                    <ArrowButton 
                        name='forward' 
                        action={ this.handleOpenNext } 
                        title={ nextPage ? `Наступнi ${nextPage.length}` : null }
                        hidden={ !nextPage } 
                    />
                </div>
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

Previews.contextTypes = {
    screenWidth: PropTypes.number
}