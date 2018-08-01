import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { LINKS, LINKS_UKR } from '../../constants'

export default class ArticleSlide extends Component {

    // shouldComponentUpdate = (nextProps) => {
    //     return nextProps.post.id !== this.props.post.id
    // }

    handleOpenSideBar = () => {
        if (this.context.screenWidth <= 480) {
            this.props.openSideBar()
        }
    }

    render() {
        const { post: { id, title, tag, image, text, date } } = this.props

        const group = LINKS_UKR[LINKS.indexOf(tag)]

        return(
            <div className='ArticleSlide clearfix'>
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
        )
    }
}

ArticleSlide.contextTypes = {
    screenWidth: PropTypes.number
}