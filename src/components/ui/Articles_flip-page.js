import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import FlipPage from 'react-flip-page'

import Article from './Article'

export default class Articles extends Component {

    // shouldComponentUpdate = (nextProps) => {
    //     return nextProps.posts !== this.props.posts
    // }

    handleChangePage = (indexPost) => {
        const { posts, match, openPost } = this.props

        let post = posts[indexPost]
        if (post) openPost(post.id, match.params.tag)
    }

    render() {
        const { posts } = this.props

        const styles = {
            width: '800',
            height: '400'
        }

        console.log('ARTICLES render', posts)

        return(
            <div className='Articles'>
                <FlipPage
                    uncutPages
                    //loopForever
                    flipOnTouch
                    showTouchHint
                    width={ styles.width }
                    height={ styles.height }
                    orientation='horizontal'
                    //firstComponent={ posts[0] }
                    onPageChange={ this.handleChangePage }
                >
                {
                    posts.map((post, i) =>
                        <Article key={i} post={ post } />
                    )
                }
                </FlipPage>
            </div>
        )
    }
}