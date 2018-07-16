import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LINKS, LINKS_UKR } from '../../constants'
import SocialShareButtons from './SocialShareButtons'

class ArticleContent extends Component {

    render() {
        const { post, openSideBar } = this.props,
            { id, title, tag, image, text, date } = post

        const group = LINKS_UKR[LINKS.indexOf(tag)]

        const postText = text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        return(
            <div className='article-content'>
                <div className='article-title'>
                    <div className='article-title-name'>
                        <h3>{ title }</h3>
                    </div>
                    <div className='article-title-tag' onClick={ () => openSideBar() }>                        
                        <span>
                            <Link to={`/${tag}/${id}`}>
                                <h3>:{ group }</h3>
                            </Link>
                        </span>
                    </div>
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