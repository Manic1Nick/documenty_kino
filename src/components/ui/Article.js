import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { LINKS, LINKS_UKR } from '../../constants'
import SocialShareButtons from './SocialShareButtons'

export default class ArticleContent extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.post.id !== this.props.post.id
    }

    handleOpenSideBar = () => {
        if (this.context.screenWidth <= 480) {
            this.props.openSideBar()
        }
    }

    render() {
        const { post } = this.props,
            { id, title, tag, image, text, date } = post

        const group = LINKS_UKR[LINKS.indexOf(tag)]

        const postText = text
            .split('\n')
            .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        return(
            <div className='Article'>

                <div className='article-slide clearfix'>
                    <Link to={`/${tag}/${id}`}>
                        <img src={`${image}`} alt={ title } title={ title } />
                    </Link>

                    <div className='article-title'>
                        <div className='article-title-name'>
                            <h3>{ title }</h3>
                        </div>
                        <div className='article-title-tag' onClick={ () => this.handleOpenSideBar() }>   
                            <Link to={`/${tag}/${id}`}>
                                <h4>:{ group }</h4>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='article-content'>

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

            </div>
        )
    }
}

ArticleContent.contextTypes = {
    screenWidth: PropTypes.number
}