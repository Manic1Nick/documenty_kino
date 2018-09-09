import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Articles from './Articles'
import SideBlock from './SideBlock'
import Previews from './Previews'

export default class Blog extends Component {

    constructor() {
        super() 
        this.state = { 
            listPosts: [],
            openSideBar: false
        }
    }

    componentWillMount = () => {
        this._updatePosts()
    }
    
    componentDidMount = () => {
        this.handleOpenPost()
    }    

    componentWillReceiveProps = (nextProps) => { 
        const { tag } = nextProps.match.params,
            { changeActiveTag } = this.context

        if (tag !== this.props.match.params.tag) {
            this._updatePosts(tag)
            changeActiveTag(tag)
        } 
    }

    handleOpenPost = (id, tag) => {
        const { match, history } = this.props

        if (!tag) tag = match.params.tag || 'all'
        //if (!id) id = listPosts[listPosts.length - 1].id
        if (!id) id = this.state.listPosts[this.state.listPosts.length - 1].id

        history.push(`/${tag}/${id}`)
        
        window.scrollTo(0, 0)
    }

    handleOpenSideBar = () => {
        this.setState({ openSideBar: true })
    }

    handleHideSideBar = () => {
        this.setState({ openSideBar: false })
    }

    render() {
        const { listPosts, openSideBar } = this.state,
            { match } = this.props,
            activePostIndex = listPosts.findIndex(post => post.id === parseInt(match.params.id))

        return(
            <div className='Blog'>
                {
                    match.params.id
                ?
                    <Articles
                        posts={ listPosts }
                        shifted={ openSideBar }
                        activePostIndex={ activePostIndex }
                        openPost={ this.handleOpenPost } 
                        openSideBar={ this.handleOpenSideBar }
                    />
                :
                    <Previews
                        posts={ listPosts }
                        match={ match } 
                        openPost={ this.handleOpenPost }
                    />
                }
                <SideBlock
                    screenWidth={ this.context.screenWidth }
                    isSideBarOpening={ openSideBar }
                    isPreviewsOpen={ !match.params.id }
                    posts={ listPosts } 
                    match={ match } 
                    openPost={ this.handleOpenPost }
                    hideSideBar={ this.handleHideSideBar }
                />      
            </div>
        )
    }

    _updatePosts = (tag) => {
        const { posts } = this.context

        let listPosts = (tag && tag !== 'all')
            ? posts.filter(post => post.tag === tag) 
            : posts

        this.setState({ listPosts })
    }
}

Blog.contextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number,
    changeActiveTag: PropTypes.func
}