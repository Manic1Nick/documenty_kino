import React, { Component } from 'react'
import SocialShareButtons from './SocialShareButtons'

class ArticleContent extends Component {

    render() {
        const { post } = this.props,
            { title, image, text, date } = post

        const postText = text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        return(
            <div className='article-content'>
                <div className='article-title'>
                    <h3>{ title }</h3>
                </div>
                <div className='article-image'>
                    <img src={`${image}`} />
                </div>
                <div className='article-text'>
                    { postText }
                </div>
                <div className='article-footer'>

                    <SocialShareButtons post={ post } />
                    
                    <div className='article-date'>
                        { date }    
                    </div>           
                </div>                  
            </div>
        )
    }
}

export default ArticleContent