import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { LINKS, LINKS_UKR } from '../../constants'
import SocialShareButtons from './SocialShareButtons'
import ViewCount from './ViewCount'
import ReactHtmlParser from 'react-html-parser'

import LogoImage from '../../assets/images/documenty-logo-sign-micro.png'

export default class Article extends Component {

    constructor(props) {
        super()
        this.state = { 
            screenWidth: props.screenWidth
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.screenWidth !== this.props.screenWidth) {
            this.setState({ screenWidth: nextProps.screenWidth })
        }
    }

    shouldComponentUpdate = (nextProps) => {
        return nextProps.post.id !== this.props.post.id
            || nextProps.screenWidth !== this.props.screenWidth
    }

    handleOpenSideBar = () => {
        if (this.state.screenWidth <= 480) {
            this.props.openSideBar()
        }
    }

    render() {        
        const { post } = this.props,
            { id, title, tag, image, text, date } = post

        const group = LINKS_UKR[LINKS.indexOf(tag)]

        // const postText = text
        //     .split('\n')
        //     .map((part, i) => <p key={i} className='text-paragraph'>{part}</p>)

        return(
            <div className='Article'>

                <div className='article-slide clearfix'>
                    <Link to={`/${tag}/${id}`}>
                        <img src={`${image}`} alt={ title } title={ title } />
                    </Link>

                    <div className='article-slide-title'>
                        <div className='article-slide-title-name'>
                            <h3>{ title }</h3>
                        </div>

                        <div className='article-slide-title-tag' 
                            onClick={ () => this.handleOpenSideBar() }
                        >   
                            <Link to={`/${tag}/${id}`} title='Вiдiбрати за роздiлом'>
                                <h4><span>:</span>{ group }</h4>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='article-title-name'>
                    <h3>{ title }</h3>
                </div>

                <div className='article-info'>
                    <ViewCount />

                    <div className='article-date'>
                        { date }    
                    </div>
                </div>

                <div className='article-share'>
                    <SocialShareButtons post={ post } />
                </div>

                <div className='article-content'>
                    { ReactHtmlParser(text) }
                </div>

                <div className='article-footer'>
                    <img src={ LogoImage } alt='logo-image' />                    
                </div>
                
            </div>
        )
    }
}