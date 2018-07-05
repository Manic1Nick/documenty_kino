import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import SideBlock from './SideBlock'
import Articles from './Articles'

export default class Blog extends Component {

    constructor(props) {
        super() 
        this.state = { 
            listPosts: [],
            viewPosts: []
        }
    }

    componentDidMount = () => {
        this._updatePosts()
    }

    componentWillMount = () => {
        this.handleOpenPost(1, 'all')
        console.log('BLOG willMount')
    }

    componentWillReceiveProps = (nextProps) => {
        const { id, tag } = nextProps.match.params
        
        if (tag !== this.props.match.params.tag) {
            console.log('BLOG willReceiveProps', id, tag)
            this._updatePosts(id, tag) 
        }
    }

    handleOpenPostWithUpdate = (id, tag) => {
        this.handleOpenPost(id, tag)
        this._updatePosts(id, tag)
    }

    handleOpenPost = (id, tag) => {
        if (!tag) tag = 'all'
        this.props.history.push(`/${tag}/${id}`)
    }

    render() {
        const { listPosts, viewPosts } = this.state

        return(
            <div className='Blog'>
                <Articles 
                    posts={ viewPosts } 
                    match={ this.props.match }
                    openPost={ this.handleOpenPost } 
                />
                <SideBlock 
                    posts={ listPosts } 
                    match={ this.props.match } 
                    openPost={ this.handleOpenPostWithUpdate } 
                />
            </div>
        )
    }

    // _updateListPosts = (tag) => {
    //     let listPosts = (tag && tag !== 'all')
    //         ? this.context.posts.filter(post => post.tag === tag) 
    //         : this.context.posts
        
    //     this.setState({ listPosts })
    // }

    // _updateViewPosts = (id) => {
    //     const { listPosts } = this.state

    //     const startPost = listPosts.find(post => post.id === parseInt(id)),
    //         indexStartPost = listPosts.indexOf(startPost),
    //         viewPosts = listPosts.slice(indexStartPost).concat(listPosts.slice(0, indexStartPost))  
            
    //     this.setState({ viewPosts })
    // }

    _updatePosts = (id, tag) => {

        let listPosts = (tag && tag !== 'all')
            ? this.context.posts.filter(post => post.tag === tag) 
            : this.context.posts

        let viewPosts = [].concat(listPosts) 

        if (id) {
            const indexPost = listPosts.findIndex(post => post.id === parseInt(id))            
            viewPosts = listPosts.slice(indexPost).concat(listPosts.slice(0, indexPost))  
        }   
            
        this.setState({ listPosts, viewPosts })
    }
}

Blog.contextTypes = {
    posts: PropTypes.array
}