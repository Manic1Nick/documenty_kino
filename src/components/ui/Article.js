import React, { Component } from 'react'
import ArticleSlide from './ArticleSlide'
import ArticleContent from './ArticleContent'
import SideList from './SideList'

export default class Article extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.post.id !== this.props.post.id
            || nextProps.posts !== this.props.posts
    }

    render() {
        return(
            <div className='Article'>

                <div className='article-top'>
                    <ArticleSlide { ...this.props } />
                </div>

                <div className='article-main'>
                    <ArticleContent { ...this.props } />
                    <SideList { ...this.props } />
                </div>

            </div>
        )
    }
}