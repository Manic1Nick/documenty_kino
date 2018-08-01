import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SocialShareButtons from './SocialShareButtons'

export default class ArticleContent extends Component {

    // shouldComponentUpdate = (nextProps) => {
    //     return nextProps.post.id !== this.props.post.id
    // }

    render() {
        const { post } = this.props,
            { text, date } = post

        const postText = text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        return(
            <div className='ArticleContent'>

                <SocialShareButtons post={ post } />

                <div className='article-text'>
                    { postText }
                </div>

                <div className='article-footer'>
                    <div className='article-date'>
                        { date }    
                    </div>           
                </div>
            </div>
        )
    }
}