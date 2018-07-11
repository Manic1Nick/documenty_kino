import React, { Component } from 'react'
import SocialShareButtons from './SocialShareButtons'

class ArticleContent extends Component {

    render() {
        const { post } = this.props

        const postText = post.text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        return(
            <div className='article-content'>
                <div className='article-title'>
                    <h3>{ post.title }</h3>
                </div>
                <div className='article-image'>
                    <img src={`${post.image}`} />
                </div>
                <div className='article-text'>
                    { postText }
                </div>
                <div className='article-footer'>

                    <SocialShareButtons post={ post } />
                    
                    <div className='article-date'>
                        { post.date }    
                    </div>           
                </div>                  
            </div>
        )
    }
}

export default ArticleContent