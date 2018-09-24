import { PropTypes } from 'prop-types'
import { Component } from 'react'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'
import { isMobile } from 'react-device-detect'

import ViewCount from './ViewCount'
import LogoSignEmpty from '../../assets/images/documenty-logo-sign-empty-micro.png'
import LogoSign from '../../assets/images/documenty-logo-sign-micro.png'

export default class PreviewsItem extends Component {

    constructor(props) {
        super()
        this.state = { 
            imageSrc: LogoSignEmpty
        }
    }    

    handleSelectItem = (id) => {        
        this.props.openPost(id)
    }

    handleChangeLogo = (imageSrc) => {
        this.setState({ imageSrc })
    }

    render() {
        const { post } = this.props,
            { id, title, tag, image, text, date } = post,
            { imageSrc } = this.state

        const days = this._getDaysFromDatePost(date)

        return(
            <div className='PreviewsItem' 
                onClick={ () => this.handleSelectItem(post.id) }
                onMouseOver={ () => this.handleChangeLogo(LogoSign) }
                onMouseOut={ () => this.handleChangeLogo(LogoSignEmpty) }
            >
                <div className='article-preview-image'>
                    <img src={`${image}`} alt={ title } title={ title } />
                </div>

                <div className='article-preview-content'>

                    <p className='article-preview-title'>
                        <span>{ title }</span>
                        <ViewCount />
                    </p>

                    <div className='article-preview-cutted'>
                        { ReactHtmlParser(text)[0] }
                    </div>

                    <p className='article-preview-footer'>
                        <img src={ isMobile ? LogoSign : imageSrc } alt='logo-sign-empty' />
                        <span>Розмiщено {days} днiв назад</span>
                    </p>

                </div>

            </div>
        )
    }

    _getDaysFromDatePost = (dateFromPost) => {
        let datePost = new Date(dateFromPost),
            today = new Date()
        
        return today.getDate() - datePost.getDate()
    }

    // _cutText = (text) => {
    //     let cuttedText = text.substring(0, 200),
    //         lastSpaceIndex = cuttedText.lastIndexOf(" ") || 0

    //     return cuttedText.substring(0, lastSpaceIndex) + " ..."
    // }
}